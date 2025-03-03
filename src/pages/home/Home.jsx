import React, { useContext } from "react";
import Layout from "../../components/layout/Layout";
import Context from "../../context/Context";
import HeroSection from "../../components/heroSection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productCard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonial/Testimonial";

const Home = () => {
  const context = useContext(Context);
  const { name } = context;
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
