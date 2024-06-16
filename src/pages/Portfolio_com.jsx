// src/pages/Home.jsx

import React from 'react';

import Portfolio_cards from '../components/Portfolio_cards';
import Footer from '../components/Footer';

const Portfolio_com = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
   
      <Portfolio_cards/>
      <Footer />
      
    </div>
  );
};

export default Portfolio_com;
