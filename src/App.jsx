import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import { ContextProvider } from "./context/Context";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import Cart from "./pages/cart/Cart";
import NoPage from "./pages/nopage/NoPage";
import ProductInfo from "./pages/productinfo/ProductInfo";
import Dashboard from "./pages/Admin/dashboard/Dashboard";
import AddProduct from "./pages/Admin/pages/AddProduct";
import UpdateProduct from "./pages/Admin/pages/UpdateProduct";
import { ToastContainer } from "react-toastify";


function App() {
  
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={
            <ProtectedRoute>
              <Order />
            </ProtectedRoute>
          } />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={
            <ProtectedRouteForAdmin>
              <Dashboard />
            </ProtectedRouteForAdmin>
              } />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/addproduct" element={<AddProduct/> } />
          <Route path="/updateproduct" element={<UpdateProduct/> } />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </ContextProvider>
  );
}

export default App;

export const ProtectedRoute=({children})=>{
  const user=JSON.parse(localStorage.getItem("user"));
  if(user){
    return children
  }
  else{
    return <Navigate to={"/login"} />
  }
}

export const ProtectedRouteForAdmin=({children})=>{
  const admin=JSON.parse(localStorage.getItem("user"))

  if(admin?.user.email==="test1@gmail.com"){
    return children
  }
  else{
    return <Navigate to={"/login"}/>
  }
}
