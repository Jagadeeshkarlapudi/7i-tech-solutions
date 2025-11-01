import React from "react";
import { FaFigma, FaPython, FaJava, FaGithub } from "react-icons/fa";
import { SiAdobephotoshop, SiVercel } from "react-icons/si";

const Whychoose = () => {
  const steps = [
    {
      title: "DESIGN",
      icons: [<SiAdobephotoshop key="ps" />, <FaFigma key="figma" />],
    },
    {
      title: "DEVELOPMENT",
      icons: [<FaPython key="py" />, <FaJava key="java" />],
    },
    {
      title: "DEPLOYMENT",
      icons: [<FaGithub key="git" />, <SiVercel key="vercel" />],
    },
  ];

  return (
    <section className="process-section py-5">
      <div className="container">
        <div className="row justify-content-center align-items-center text-center position-relative">
          {steps.map((step, index) => (
            <div className="col-md-4 mb-4 mb-md-0 position-relative" key={index}>
              <div className="process-card shadow-sm p-4">
                <div className="icon-circle mb-3 mx-auto">
                  {step.icons.map((icon, i) => (
                    <span key={i} className="icon-inner">
                      {icon}
                    </span>
                  ))}
                </div>
                <h5 className="fw-bold text-dark mt-2">{step.title}</h5>
              </div>

              {/* Visible dashed arrows only between cards */}
              {index < steps.length - 1 && (
                <div className="arrow-line d-none d-md-block">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 250 80"
                    width="250"
                    height="80"
                  >
                    <path
                      d="M10,40 Q125,5 240,40"
                      stroke="#666"
                      strokeWidth="2.5"
                      strokeDasharray="8"
                      fill="transparent"
                      markerEnd="url(#arrowhead)"
                    />
                    <defs>
                      <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="9"
                        refY="5"
                        orient="auto"
                      >
                        <polygon points="0 0, 10 5, 0 10" fill="#666" />
                      </marker>
                    </defs>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whychoose;
