import { motion } from "framer-motion";
import CountUp from "react-countup";
import simg1 from './assets/images/shape1.png'

function Aboutus() {
    return ( 
        <section className="about-section position-relative py-5">
      {/* Background Shapes */}
      <div className="shape shape-1"></div>
      <div className="shape shape-2"></div>

      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-md-6 mb-4 mb-md-0">
            <h2 className="about-heading mb-3 ">About Us</h2>
            <p className="about-text">
              We are passionate educators offering quality learning experiences
              across multiple domains. Our goal is to empower learners through
              practical, industry-focused training programs.
            </p>
            <button className="btn btn-primary mt-3 px-4 py-2">Learn More</button>
          </div>

          {/* Vertical Divider */}
          <div className="col-md-1 d-none d-md-flex justify-content-center">
            <div className="vr-line"></div>
          </div>

          {/* Right Content */}
          <div className="col-md-5">
            <div className="d-flex justify-content-between text-center stats-container">
                <div className="stat-box">
              <motion.div className="stat-box" initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
                <h3 className="stat-number"><CountUp end={30} duration={2.5} />+</h3>
                <p className="stat-text">Courses</p>
              </motion.div>
              </div>

              <div className="stat-box1">
              <motion.div className="stat-box1" initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
                <h3 className="stat-number"><CountUp end={10} duration={2.5} />+</h3>
                <p className="stat-text">Years Exp.</p>
              </motion.div>
              </div>
            </div>
             <div className="d-flex justify-content-between text-center stats-container">

                <div className="stat-box1">
              <motion.div className="stat-box1" initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
                <h3 className="stat-number"><CountUp end={5} duration={2.5} />+</h3>
                <p className="stat-text">Branches</p>
              </motion.div>
              </div>

              <div className="stat-box">
              <motion.div className="stat-box" initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
                <h3 className="stat-number"><CountUp end={5000} duration={2.5} />+</h3>
                <p className="stat-text">Students</p>
              </motion.div>
            </div>
            </div>

            <div className="stat-box1">
            <motion.div className="stat-box1 text-center" initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}>
                <h3 className="stat-number"><CountUp end={1000} duration={2.5} />+</h3>
                <p className="stat-text">Placed</p>
              </motion.div>
              </div>
          </div>
        </div>
      </div>
    </section>
     );
}

export default Aboutus;