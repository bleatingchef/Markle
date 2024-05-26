import React from 'react';
import { companyLogos } from "../constants";
import "./CompanyLogos.css";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className} logo-slider`}>
      <ul className="logo-list">
        {companyLogos.map((logo, index) => (
          <li className="logo-item" key={index}>
            <img src={logo} width={200} height={200} alt={`Logo ${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
