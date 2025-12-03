import React from "react";
import sanju from "./assets/images/sanju.png"
import anu from "./assets/images/anu.png"
import santhosh from "./assets/images/santhosh.jpg"
import santosh from "./assets/images/santosh.jpeg"
import niroop from "./assets/images/niroop.png"
import varun from "./assets/images/varun.png"
import sravan from "./assets/images/sravan.jpeg"

const portfolioData = [
  {
    img: anu,
    name: "Anusha",
    title: "E-Commerce Web App",
    desc: "A complete e-commerce website with payments and admin dashboard.",
    link: "https://anusha.7iworkspace.in/"
  },
  {
    img: sravan,
    name: "Sravan Reddy",
    title: "Collage Website",
    desc: "Making a website is now one of the easiest things in the world. You just need to learn HTML, CSS, and JavaScript, and you are good to go.",
    link: "https://sravan.7iworkspace.in/"
  },
  {
    img: varun,
    name: "Varun Kumar",
    title: "Pelli Alankarana",
    desc: "At Pelli Alankarana, we believe that every Telugu wedding deserves the perfect traditional touch.",
    link: "https://varun.7iworkspace.in/"
  },
  {
    img: sanju,
    name: "Kanakadhurga Rao",
    title: "Food Delivery App",
    desc: "A real-time food delivery UI with live tracking.",
    link: "https://sanju.7iworkspace.in/"
  },
  {
    img: niroop,
    name: "Niroop Kumar",
    title: "Interior Website",
    desc: "We Create Stunning Spaces Our designs blend functionality and beauty to create timeless interiors.",
    link: "https://niroop-portfolio.vercel.app/"
  },
  {
    img: santhosh,
    name: "Santhosh Kumar",
    title: "Building Website",
    desc: "A professional landing page for a fictional construction company. ",
    link: "https://santosh.7iworkspace.in/"
  },
  {
    img: santosh,
    name: "Santhosh",
    title: "Food Delivery App",
    desc: "A real-time food delivery UI with live tracking.",
    link: "https://santhosh.7iworkspace.in/"
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
