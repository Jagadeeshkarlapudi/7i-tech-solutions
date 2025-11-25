import React from "react";

import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa";

const Socialmedia = () => {
  return (
    <div className="social-bar d-none d-lg-flex flex-column align-items-center">
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon facebook"
      >
        <FaFacebookF />
      </a>
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon instagram"
      >
        <FaInstagram />
      </a>
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon twitter"
      >
        <FaTwitter />
      </a>
      <a
        href="https://youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="social-icon youtube"
      >
        <FaYoutube />
      </a>
      <a
        href="https://linkedin.com"
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
