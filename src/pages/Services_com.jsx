// src/pages/Home.jsx

import React from 'react';
import Services_data from "../components/Services_data";
import Footer from "../components/Footer";
import Benefits_services from '../components/Benifits_services';

const Services_com = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
  
      <Benefits_services/>

      <Services_data />
      <Footer />
    </div>
  );
};

export default Services_com;
