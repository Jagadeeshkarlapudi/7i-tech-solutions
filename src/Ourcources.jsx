import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Youtube, Clock, BadgeCheck } from "lucide-react";
import design from "./assets/images/uiux.png"
import java from "./assets/images/java.png"
import python from "./assets/images/python.png"
import react from "./assets/images/react.png"
import { a, title } from "framer-motion/client";


// FILTER OPTIONS
const filters = [
  "All Courses",
  "FullStack Courses",
  "FrontEnd Courses",
  "UI/UX Courses",
  "Digital Marketing",
  "Other Courses",
];

// API-ready course structure
const courses = [
  {
    id: 1,
    title: "UIX DESIGNER",
    category: "UI/UX Courses",
    img: design,
    
    tech: "HTML | CSS | JS | BOOTSTRAP | REACT",
    rating: 5,
  },
  {
    id: 2,
    title: "Fullstack React",
    category: "FrontEnd Courses",
    img: react,
    
    tech: "HTML | CSS | JS | BOOTSTRAP | REACT",
    rating: 5,
  },
  {
    id: 3,
    title: "Fullstack Java",
    category: "FullStack Courses",
    img: java,
    
    tech: "JAVA | JDBC | SPRINGBOOT | HIBERNATE",
    rating: 5,
  },
  {
    id: 4,
    title: "Fullstack Python",
    category: "FullStack Courses",
    img: python,
   
    tech: "HTML | CSS | PYTHON | DJANGO | REACT",
    rating: 5,
  },
  {
    id:5,
    title: "Digital Marketing",
    category: "Digital Marketing",
    img: python,
    tech : "SEO | GOOGLE ADS | ADS | RATTINGS",
    rating: 5,
  },
  {
    id:6,
    title: "C language",
    category:"Other Courses",
    img:python,
    tech : "C Lang",
    rating:4,
  },
  {
    id:7,
    title:"MS Office",
    category:"Other Courses",
    img:java,
    tech: "Word | Excel | Power Point",
    rating:5
  }
];

export default function OurCourses() {
  const [activeFilter, setActiveFilter] = useState("All Courses");

  const filteredCourses =
    activeFilter === "All Courses"
      ? courses
      : courses.filter((c) => c.category === activeFilter);

  return (
    <div className="container py-5">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center fw-bold mb-3"
      >
        Our Courses
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-center text-muted mx-auto mb-4 w-75"
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      </motion.p>

      {/* FILTER BUTTONS */}
      <div className="d-flex flex-wrap justify-content-center gap-2 mb-4">
        {filters.map((f) => (
          <motion.button
            whileTap={{ scale: 0.92 }}
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`btn px-3 py-2 rounded-pill ${
              activeFilter === f
                ? "btn-primary text-white"
                : "btn-light border"
            }`}
          >
            {f}
          </motion.button>
        ))}
      </div>

      {/* COURSE CARDS */}
      <div className="row g-4">
        {filteredCourses.map((course) => (
          
          <div key={course.id} className="col-12 col-sm-6 col-lg-3">
            <motion.div
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.3 }}
              className="card shadow-sm border-0 h-100"
            >
              <div className="position-relative">
                <a href="/full-stack-python/">
                <img
                  src={course.img}
                  alt={course.title}
                  className="card-img-top"
                  
                  // style={{ height: "240px", objectFit: "cover" }}
                />
                </a>

             
                
              </div>
                <a href="/full-stack-python/">
              <div className="card-body">
                <h5 className="card-title fw-bold">{course.title}</h5>
                <p className="card-text small text-muted">{course.tech}</p>

                {/* Rating */}
                <div className="mb-2 d-flex justify-content-between text-warning ">
                  <div>
                    {Array(course.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                    <div className="d-flex justify-content-between align-items-center">
                      
                    <Youtube size={16} className="bg-danger text-white rounded me-2" /><span> video</span>
                  
                    </div>

                </div>
 
                {/* Buttons */}
                <div className="d-flex justify-content-between mt-3">
                  <div>
                    <button className="btn btn-warning text-white">Read More</button>
                  </div>
                  <div>
                  <a href=""><button className="btn btn-warning text-white ">Free Demo</button></a>

                  </div>

                 
                </div>
              </div>
              </a>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
