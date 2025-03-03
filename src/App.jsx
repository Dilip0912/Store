import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import { ContextProvider } from "./context/Context";
import Login from "./pages/registration/Login";
import Signup from "./pages/registration/Signup";
import Cart from "./pages/cart/Cart";
import NoPage from "./pages/nopage/NoPage";
import ProductInfo from "./pages/productinfo/ProductInfo";
import Dashboard from "./pages/Admin/dashboard/Dashboard";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
