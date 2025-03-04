import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import Context from "../../context/Context";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const Home = () => {
  const dispatch=useDispatch();
  const cartItem=useSelector(state=>state.cart);
  console.log(cartItem)
  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <Track/>
      <Testimonial/>
    </Layout>
  );
};

export default Home;
