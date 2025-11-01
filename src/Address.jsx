import React from "react";
import Hyd from './assets/images/hyd.png';
import Krm from './assets/images/karimnagar.png';

const branches = [
  {
    city: "Hyderabad",
    subtitle:"Head Office",
    address:
      "Sai Satya Commercial Complex, beside JC BROTHERS, near KPHB, Hyderabad, Telangana 500072",
    image: Hyd
  },
  {
    city: "Karimnagar",
    subtitle:"Branch Office",
    address:
      "2nd Floor, Court Chowrastha, Reddy Residency, Flat No, 202, Christian Colony, Karimnagar, Telangana 505501",
    image:
      Krm
  },
];

const Address = () => {
  return (
    <div className="branches-section  py-5">
      <div className="container">
      <div className="row py-2">
        <div className="col-12 text-center">
          <h2>Our Branches</h2>
        </div>
      </div>
      <div className="row g-4">
        {branches.map((branch, index) => (
          <div className="col-md-6" key={index}>
            <div className="branch-card shadow-sm p-4">
              <div className="row align-items-center">
                {/* Left Side Image */}
                <div className="col-md-4 text-center mb-3 mb-md-0">
                  <img
                    src={branch.image}
                    alt={branch.city}
                    className="img-fluid branch-image"
                  />
                </div>

                {/* Right Side Content */}
                <div className="col-md-8">
                  <h3 className="fw-bold text-dark mb-2">{branch.city}</h3>
                  <h5 className="text-muted">{branch.subtitle}</h5>
                  <p className="text-secondary mb-4">{branch.address}</p>

                  <div className="d-flex flex-wrap gap-3">
                    <button className="btn btn-call">Call Us</button>
                    <button className="btn btn-map">Map</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Address;
