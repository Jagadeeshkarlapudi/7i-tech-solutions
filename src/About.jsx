import React from "react";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaProjectDiagram,
  FaCloudUploadAlt,
  FaRegHandshake
} from "react-icons/fa";

import about from './assets/images/sideimg.png'


const About = () => {
  const highlights = [
    {
      icon: <FaUsers />,
      title: "Limited Batch Members",
      desc: "Personalized attention with small, focused groups for effective learning.",
    },
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Trainers",
      desc: "Learn directly from certified industry professionals with real experience.",
    },
    {
      icon: <FaProjectDiagram />,
      title: "Realtime Projects",
      desc: "Hands-on projects designed to match real-world industry use cases.",
    },
    {
      icon: <FaCloudUploadAlt />,
      title: "Deployment",
      desc: "Get guided assistance to deploy your projects live on real platforms.",
    },
     {
      icon: <FaUsers />,
      title: "Placements",
      desc: "Get guided assistance to deploy your projects live on real platforms.",
    },
    {
      icon: <FaRegHandshake />,
      title: "Job Assitance",
      desc: "Get guided assistance to deploy your projects live on real platforms.",
    },
  ];

  return (
    <section className="highlights-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* LEFT IMAGE */}
          <div className="col-lg-5 text-center mb-4 mb-lg-0">
            <img
              src={about}
              alt="Training Highlights"
              className="img-fluid highlights-image"
            />
          </div>

          {/* RIGHT POINTS */}
          <div className="col-lg-7">
            <h2 className="fw-bold mb-4 section-heading">
              Why Choose <span className="highlight-text">Us?</span>
            </h2>
            <div className="row g-4">
              {highlights.map((item, i) => (
                <div key={i} className="col-sm-6 d-flex align-items-start gap-3">
                  <div className="icon-oval">{item.icon}</div>
                  <div>
                    <h5 className="fw-semibold mb-1 point-title">{item.title}</h5>
                    <p className="text-muted small mb-0">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
