import React from "react";


const portfolioData = [
  {
    img: "https://via.placeholder.com/150",
    name: "John Doe",
    title: "E-Commerce Web App",
    desc: "A complete e-commerce website with payments and admin dashboard.",
    link: "#"
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Sanjana R",
    title: "Hotel Booking System",
    desc: "Hotel booking system with filters, calendar sync and secure login.",
    link: "#"
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Rahul Kumar",
    title: "Portfolio Website",
    desc: "Animated portfolio website built using React.",
    link: "#"
  },
  {
    img: "https://via.placeholder.com/150",
    name: "Meghana",
    title: "Food Delivery App",
    desc: "A real-time food delivery UI with live tracking.",
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <section className="portfolio-section">
      <h2 className="portfolio-heading">Student Portfolio</h2>
      <p className="portfolio-sub">
        Our students create real-time industry level projects. Here are some of the best works.
      </p>

      <div className="scroll-wrapper">
        <div className="scroll-track">
          {/* Duplicate list for infinite loop */}
          {[...portfolioData, ...portfolioData].map((item, index) => (
            <div key={index} className="portfolio-card">
              <img src={item.img} alt={item.name} className="profile-img" />
              <h3 className="student-name">{item.name}</h3>
              <h4 className="project-title">{item.title}</h4>
              <p className="project-desc">{item.desc}</p>
              <a href={item.link} className="view-btn">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
