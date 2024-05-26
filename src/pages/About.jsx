// src/pages/Home.jsx

import React from 'react';
import About_hero from "../components/Hero";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      {/* <About_hero /> */}
      <About_hero/>
      <Benefits />
      {/* <Collaboration />
      <Services />
      <Pricing />
      <Roadmap /> */}
      <Footer />
    </div>
  );
};

export default About;
