import React from 'react';
import Section from "./Section";
import Heading from "./Heading";
import { service4, service5, check } from "../assets";
import { Servicesdata, Servicesdata1 } from "../constants";
import { Gradient } from "./design/Services";

const Services_data = () => {
  return (
    <Section id="how-to-use">
      <div className="container">
        <Heading
          title="Benevolences With"
          text="Experience the difference with our customer service. “We listen, we care, we deliver”."
        />

        <div className="relative">
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="relative z-1 max-w-[17rem] mr-auto">
              <h4 className="h4 mb-4">Privilege</h4>
              <ul className="body-2">
                {Servicesdata.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="Check icon" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute top-0 right-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right opacity-20"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service4}
              />
            </div>
          </div>
          <Gradient />
        </div>

        <div className="relative">
          <div className="relative z-1 flex flex-row-reverse items-center h-[39rem] mb-5 p-8 border border-n-1/10 rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Assistance</h4>
              <ul className="body-2">
                {Servicesdata1.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img width={24} height={24} src={check} alt="Check icon" />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none md:w-3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-left opacity-20"
                width={800}
                alt="Smartest AI"
                height={730}
                src={service5}
              />
            </div>
          </div>
          <Gradient />
        </div>
      </div>
    </Section>
  );
};

export default Services_data;