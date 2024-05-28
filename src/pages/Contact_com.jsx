// src/pages/Home.jsx

import React from 'react';
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";
import Contact_hero from '../components/Contact_hero';
import Contact_services from '../components/Contact_services';

const Contact_com = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Contact_hero/>
      {/* <Benefits /> */}
      {/* <Collaboration /> */}
      <Contact_services/>
      {/* <Pricing /> */}
      {/* <Roadmap /> */}
      <Footer />
    </div>
  );
};

export default Contact_com;
