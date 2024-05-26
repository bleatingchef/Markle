// src/pages/Home.jsx

import React from 'react';
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import Product_Services from '../components/Product_services';
import Product_Benefits from '../components/Product_benifits';

const Product_com = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      {/* <Hero /> */}
      <Product_Benefits />
      {/* <Collaboration /> */}
      <Product_Services/>
      {/* <Pricing /> */}
      {/* <Roadmap /> */}
      <Footer />
    </div>
  );
};

export default Product_com;
