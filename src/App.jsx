import React from "react";
import { Route, Routes } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services_com from "./pages/Services_com"
import Product_com from "./pages/Product_com";
import About from "./pages/About";
import Portfolio_com from "./pages/Portfolio_com";
import Package_com from "./pages/Package_com";
// import About_com from "./pages/About_com";
import Contact_com from "./pages/Contact_com";



const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/services" element={<Services_com />} />
        <Route path="/product" element={<Product_com />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio_com/>}/>
        <Route path="/packages" element={<Package_com/>}/>
        <Route path="/contact" element={<Contact_com/>}/>
        {/* <Route path="about" element={<About_com/>}/>  */}
      </Routes>
      <ButtonGradient />
    </>
  );
};

export default App;
