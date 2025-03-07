import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  onSnapshot,
  orderBy,
  query,
  QuerySnapshot,
  setDoc,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { fireDB } from "../firebase/FirebaseConfig";

const Context = createContext();
export default Context;

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "rgb(17,24,39)";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
    }
  };

  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
  });

  // Add Product function
  const addProduct = async () => {
    if (
      products.title === "" ||
      products.price === "" ||
      products.imageUrl === "" ||
      products.category === "" ||
      products.description === ""
    ) {
      return toast.error("All inputs Required");
    }
    const productRef = collection(fireDB, "Products");
    setLoading(true);
    try {
      await addDoc(productRef, products);
      toast.success("Successfully Added");
      getProductData();
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 500);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const [product, setProduct] = useState([]);

  const getProductData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(fireDB, "Products"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProduct(productList);
      setLoading(false);
    } catch (err) {
      console.log(err);
      setLoading(false);
    }
  };

  const editHandle = (item) => {
    setProducts(item);
  };
  // console.log(products);

  const updateProduct = async (id) => {
    // console.log(products);
    // console.log(id);

    const docRef = doc(fireDB, "Products", id); //Collection name must be same(capital p)

    await updateDoc(docRef, products);
    // await setDoc(doc(fireDB,"Products",products.id),products)
    toast.success("Update Successfull");
    getProductData();
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 1000);
  };

  const deleteProduct = async (id) => {
    const docRef = doc(fireDB, "Products", id);
    await deleteDoc(docRef);
    getProductData();
  };

  const [order, setOrder] = useState([]);
  const getOrderData = async () => {
    setLoading(true)
    try {
      const querySnapshot = await getDocs(collection(fireDB, "orders"));
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      // console.log(result)
      setOrder(result);
      setLoading(false)
      // console.log(order)
    } catch (err) {
      console.log(err);
      setLoading(false)
    }
  };
  
  const [ user, setUser ] = useState([]);
  const getUserData = async () => {
    setLoading(true);
    try {
      const querySnapshot = await getDocs(collection(fireDB, "users"));
      const result = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      // console.log(result)
      setUser(result)
      setLoading(false)
      
      
    } catch (err) {
      console.log(err)
      setLoading(false)
    }
  };

  useEffect(() => {
    getProductData();
    getOrderData();
    getUserData();
    // console.log(order)
  }, []);

  // useEffect(()=>{
  //   console.log(order)
  // },[order])

  // console.log(product);

  return (
    <Context.Provider
      value={{
        theme,
        toggleTheme,
        loading,
        setLoading,
        products,
        setProducts,
        addProduct,
        product,
        editHandle,
        updateProduct,
        deleteProduct,
        order,
        user
      }}
    >
      {children}
    </Context.Provider>
  );
};
