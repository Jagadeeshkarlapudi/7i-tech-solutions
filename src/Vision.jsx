import React from "react";

const Vision = () => {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Side - Vision */}
        <div className="col-md-6 mb-4">
          <div className="p-4 shadow rounded bg-white h-100">
            <h2 className="text-primary mb-3">Our Vision</h2>
            <p className="text-muted">
              Our vision is to empower individuals through high-quality education,
              enabling them to unlock their potential, achieve professional excellence,
              and build successful careers with confidence.
            </p>
          </div>
        </div>

        {/* Right Side - Mission */}
        <div className="col-md-6 mb-4">
          <div className="p-4 shadow rounded bg-white h-100">
            <h2 className="text-primary mb-3">Our Mission</h2>
            <p className="text-muted">
              Our mission is to deliver innovative learning programs, hands-on
              training, and real-world guidance that helps students master
              modern technologies and industry-required skills.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Vision;
