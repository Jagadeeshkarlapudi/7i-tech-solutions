import React from "react";
import Navbar from "../Navbar";
import Toasts from "../Toasts";
import Rating from "../Rating";
import Socialmedia from "../Socialmedia";
import Whatsapp from "../Whatsapp";
import Address from "../Address";
import Footer from "../Footer";
import poster from "../assets/images/poster.jpeg"


const softSkillsData = [
  {
    title: "Communication Skills",
    points: [
      "Clear verbal communication",
      "Effective email writing",
      "Active listening",
      "Presentation skills",
    ],
  },
  {
    title: "Teamwork & Collaboration",
    points: [
      "Working with diverse teams",
      "Sharing responsibilities",
      "Supporting teammates",
    ],
  },
  {
    title: "Problem Solving",
    points: [
      "Identifying issues",
      "Analyzing situations",
      "Finding creative solutions",
    ],
  },
  {
    title: "Time Management",
    points: [
      "Task prioritization",
      "Planning daily workflow",
      "Meeting deadlines",
    ],
  },
  {
    title: "Leadership",
    points: [
      "Decision making",
      "Motivating team members",
      "Taking responsibility",
    ],
  },
  {
    title: "Adaptability",
    points: [
      "Adjusting to new environments",
      "Learning new skills quickly",
      "Open-minded approach",
    ],
  },
  {
    title: "Critical Thinking",
    points: [
      "Analyzing information",
      "Evaluating alternatives",
      "Logical reasoning",
    ],
  },
];

const SoftSkills = () => {
  return (
    <>
      <Navbar/>
      <Toasts/>
      <Rating/>
      <Socialmedia/>
      <div className="softskills-container py-5 position-relative">
      
      
      {/* Background Shapes */}
      <div className="shape1"></div>
      <div className="shape2"></div>
      <div className="shape3"></div>

      <div className="container">
        <div className="row g-4">

          {/* LEFT SIDE 70% */}
          <div className="col-lg-9">
            <h2 className="fw-bold mb-3">Soft Skills for Professional Growth</h2>
            <p className="text-muted mb-4">
              Soft skills are essential in every workplace. They help individuals
              communicate effectively, collaborate with teams, solve problems, and
              adapt to challenges. Below are the key soft skills needed for strong
              career development.
            </p>
            <div className="row g-3">
            {softSkillsData.map((skill, index) => (
              <div className="col-lg-6 skill-box mb-4 p-3 rounded shadow-sm" key={index}>
                <h4 className="skill-title mb-2">{skill.title}</h4>
                <ul className="mb-0">
                  {skill.points.map((point, i) => (
                    <li key={i} className="text-muted">{point}</li>
                  ))}
                </ul>
              </div>
            ))}
            </div>
          

            </div>
            

            

          {/* RIGHT SIDE 30% */}
           <div className="col-lg-3 col-md-5 col-12">
                   <div className="card shadow-lg p-3 demo-card text-center">
                     <div className="card-body">
                       <h5 className="fw-bold text-primary mb-3">Call Us for a Free Demo</h5>
                       <p className="text-muted mb-3">
                         Get a live experience of our Full Stack Python program.
                       </p>
                       <a href="https://wa.me/916304613074" target="_blank"><button className="btn btn-primary px-4">📞 Contact Us</button></a>
                     </div>
                   </div>
                   <div className="card demo-card text-center">
                    <img src={poster} alt="" />
                   </div>
                 </div>
                 </div>
        </div>
      </div>
    <Whatsapp/>
    <Address/>
    <Footer/>
    </>
  );
};

export default SoftSkills;
