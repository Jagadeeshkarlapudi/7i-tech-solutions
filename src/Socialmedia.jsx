import React from "react";

import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Socialmedia = () => {
  return (
    <div className="social-bar d-none d-lg-flex flex-column align-items-center">
      <a
        href="https://www.facebook.com/7iTECHSOLUTIONS/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://www.instagram.com/7itech_solutions/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
      >
        <FaInstagram />
      </a>
      {/* <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon twitter"
      >
        <FaTwitter />
      </a> */}
      <a
        href="https://www.youtube.com/@7itechsolutions"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon youtube"
      >
        <FaYoutube />
      </a>
      <a
        href="https://in.linkedin.com/company/7itech-solutionss"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon linkedin"
      >
        <FaLinkedinIn />
      </a>
    </div>
  );
};

export default Socialmedia;
