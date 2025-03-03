import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Order from "./pages/order/Order";
import { ContextProvider } from "./context/Context";

function App() {
  return (
    <ContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </Router>
    </ContextProvider>
  );
}

export default App;
