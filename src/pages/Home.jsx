import React from "react";
import Announcement from "../components/Announcement";
import Categories from "../components/Categories";
import CepSearch from "../components/CepSreach";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div>
      <Announcement width="100%" text="Smartphones"/>
      <Navbar/>
      <CepSearch/>
      <Announcement width="100%" text="Pneus com Frete Grátis"/>
      <Slider/>
      <Categories/>
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home