import React from "react";
import { motion } from "framer-motion";
import ps from './assets/images/ps.png'
import fig from './assets/images/Figma.png'
import jav from './assets/images/javaimg.png'
import pyt from './assets/images/pythonimg.png'
import git from './assets/images/git.png'
import ver from './assets/images/vercel.png'
// import develop from './assets/images/develop.png'
// import deploy from './assets/images/deploy.png'
// import design from './assets/images.design.png'
import arrow from './assets/images/Arrows-1.png'
import arrow1 from './assets/images/Arrows.png'


const Whychoose = () => {
  return (
    <div className="process-wrapper container-fluid">

      <div className="row justify-content-center align-items-center">

        {/* DESIGN */}
        <motion.div
          className="col-12 col-md-4 text-center process-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="card-bg bg-design"></div>

          <div className="icon-circle">
            <img src={ps} alt="ps" />
            <img src={fig} alt="figma" />
          </div>
          <h3 className="title text-light">DESIGN</h3>
        </motion.div>

        {/* Arrow */}
        <div className="arrow-container d-none d-md-block">
          <img src={arrow1} alt="arrow" />
        </div>

        {/* DEVELOPMENT */}
        <motion.div
          className="col-12 col-md-4 text-center process-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="card-bg bg-development"></div>

          <div className="icon-circle">
            <img src={pyt} alt="python" />
            <img src={jav} alt="java" />
          </div>
          <h3 className="title text-light">DEVELOPMENT</h3>
        </motion.div>

        {/* Arrow */}
        <div className="arrow-container d-none d-md-block">
          <img src={arrow} alt="arrow" />
        </div>

        {/* DEPLOYMENT */}
        <motion.div
          className="col-12 col-md-4 text-center process-card"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="card-bg bg-deployment"></div>

          <div className="icon-circle">
            <img src={git} alt="github" />
            <img src={ver} alt="vercel" />
          </div>
          <h3 className="title text-light">DEPLOYMENT</h3>
        </motion.div>

      </div>
    </div>
  );
};

export default Whychoose;
