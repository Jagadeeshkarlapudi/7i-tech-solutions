import React from "react";
import google from "./assets/images/Google_logo.svg"
import ibm from "./assets/images/IBM_logo.svg"
import amazon from './assets/images/Amazon_logo.svg'
import ms from './assets/images/Microsoft_logo.svg'
// import tcs from './assets/images/tcs.png'

const companyLogos = [
  google,
  ibm,
  amazon,
  ms,

  
];

const Companies = () => {
  return (
    <div className="companies-section py-4">
      <div className="container text-center">
        <h2 className=" mb-4">Our Hiring Partners</h2>

        <div className="logos-slider d-flex overflow-hidden position-relative py-3">
          <div className="logos-track d-flex">
            {companyLogos.map((logo, index) => (
              <div key={index} className="logo-item mx-4">
                <img
                  src={logo}
                  alt={`Company ${index}`}
                  className="img-fluid"
                />
              </div>
            ))}
            {/* Duplicate set for infinite loop */}
            {companyLogos.map((logo, index) => (
              <div key={`dup-${index}`} className="logo-item mx-4">
                <img
                  src={logo}
                  alt={`Company duplicate ${index}`}
                  className="img-fluid"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
