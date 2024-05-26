// src/pages/Home.jsx

import React from 'react';
import Hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import Portfolio_cards from '../components/Portfolio_cards';

const Portfolio_com = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
   
      <Portfolio_cards/>
      
      <Footer />
    </div>
  );
};

export default Portfolio_com;
