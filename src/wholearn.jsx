import React from "react";
import { FaHome, FaBriefcase, FaUserGraduate, FaMicrochip } from "react-icons/fa";

const WhoCanLearn = () => {
  const learners = [
    {
      icon: <FaHome />,
      title: "Housewives",
      desc: "Learn IT skills from home and start a flexible digital career.",
    },
    {
      icon: <FaBriefcase />,
      title: "Working Professionals",
      desc: "Enhance your technical expertise and grow your career in IT.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Students",
      desc: "Build your foundation in IT and get ready for future opportunities.",
    },
    {
      icon: <FaMicrochip />,
      title: "Non-IT Professionals",
      desc: "Transition into the IT field with the right training and mentorship.",
    },
  ];

  return (
    <section className="who-section py-10">
      <div className="container text-center">
        <h2 className="fw-bold mb-3 position-relative d-inline-block heading-title">
  Who Can Learn <span className="highlight">IT?</span>
</h2>

        <div className="row g-4 py-10">
          {learners.map((item, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="learn-card h-100 p-4">
                <div className="icon-wrapper mx-auto mb-3">{item.icon}</div>
                <h5 className="fw-semibold mb-2">{item.title}</h5>
                <p className="text-secondary small">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoCanLearn;
