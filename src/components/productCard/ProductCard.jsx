import React, { useContext } from "react";
import Context from "../../context/Context";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
function ProductCard() {
  const context = useContext(Context);
  const { theme, product, searchKey, filterType } = context;
  // const {searchKey}=useContext(Context);

  // console.log(searchKey);
  // console.log(product);
  // const Aproduct = product.filter((obj) => {
  //   return obj.title.toLowerCase().includes(searchKey);
  //   // console.log(searchKey)
  //   // console.log(obj.title.toLowerCase().includes(searchKey));
  // });
  // console.log(Aproduct);

  const dispatch = useDispatch();
  const addCart = (item) => {
    dispatch(addToCart({ ...item, time: " " }));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 md:py-16 mx-auto">
        <div className="lg:w-1/2 w-full mb-6 lg:mb-10">
          <h1
            className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900"
            style={{ color: theme === "dark" ? "white" : "" }}
          >
            Our Latest Collection
          </h1>
          <div className="h-1 w-20 bg-pink-600 rounded"></div>
        </div>

        <div className="flex flex-wrap -m-4">
          {product
            .filter((obj) => {
              // console.log(obj.category.toLowerCase())
              return obj.category.toLowerCase().includes(searchKey);
              // console.log(searchKey)
              // console.log(obj.title.toLowerCase().includes(searchKey));
            })
            .map((item, index) => {
              // console.log(item);
              const { title, price, description, imageUrl,id } = item;
              return (
                <div  onClick={()=>window.location.href=`/productinfo/${id}`} key={index} className="p-4 md:w-1/4  drop-shadow-lg ">
                  <div
                    className="h-full border-2 hover:shadow-gray-100 hover:shadow-2xl transition-shadow duration-300 ease-in-out    border-gray-200 border-opacity-60 rounded-2xl overflow-hidden"
                    style={{
                      backgroundColor: theme === "dark" ? "rgb(46 49 55)" : "",
                      color: theme === "dark" ? "white" : "",
                    }}
                  >
                    <div className="flex justify-center cursor-pointer">
                      <img
                        className=" rounded-2xl w-full h-80 p-2 hover:scale-110 transition-scale-110  duration-300 ease-in-out"
                        src={imageUrl}
                        alt="blog"
                      />
                    </div>
                    <div className="p-5 border-t-2">
                      <h2
                        className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
                        style={{ color: theme === "dark" ? "white" : "" }}
                      >
                        E-Bharat
                      </h2>
                      <h1
                        className="title-font text-lg font-medium text-gray-900 mb-3"
                        style={{ color: theme === "dark" ? "white" : "" }}
                      >
                        {title}
                      </h1>
                      {/* <p className="leading-relaxed mb-3">{item.description.}</p> */}
                      <p
                        className="leading-relaxed mb-3"
                        style={{ color: theme === "dark" ? "white" : "" }}
                      >
                        ₹ {price}
                      </p>
                      <div className=" flex justify-center">
                        <button
                          onClick={() => addCart(item)}
                          type="button"
                          className="focus:outline-none text-white bg-pink-600 hover:bg-pink-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm w-full  py-2"
                        >
                          Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default ProductCard;
