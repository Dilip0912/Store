import { addDoc, collection, Timestamp } from "firebase/firestore";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { fireDB } from "../firebase/FirebaseConfig";

const Context=createContext()
export default Context;

export const ContextProvider=({children})=>{
    const [theme,setTheme]=useState("light");
    const toggleTheme=()=>{
        if(theme==="light"){
            setTheme("dark")
            document.body.style.backgroundColor="rgb(17,24,39)"
        }
        else{
            setTheme("light")
            document.body.style.backgroundColor="white"
        }
    }

    const [loading,setLoading]=useState(false);

    const[products,setProducts]=useState({
        title:null,
        price:null,
        imageUrl:null,
        category:null,
        description:null,
        time: Timestamp.now(),
        date: new Date().toLocaleString("en-US",
            {
                month:"short",
                day:"2-digit",
                year: "numeric"
            }
        )

    })

    // Add Product function
    const addProduct=async ()=>{
        if(products.title===""||products.price===""||products.imageUrl===""||products.category===""||products.description===""){
            return toast.error("All inputs Required")
        }
        const productRef=collection(fireDB,"Products")
        setLoading(true)
        try{
            await addDoc(productRef,products)
            toast.success("Successfully Added")
            setLoading(false)
        }
        catch(err){
            console.log(err)
            setLoading(false)
        }
    }



    return(
        <Context.Provider value={{theme,toggleTheme,loading,setLoading,products,setProducts,addProduct}}>
            {children}
        </Context.Provider >
    )
}