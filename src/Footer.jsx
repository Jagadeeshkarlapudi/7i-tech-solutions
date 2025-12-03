import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Column - Copyright */}
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0 footer-text">
              © {new Date().getFullYear()} 7i Tech SOlutions. All Rights Reserved.
            </p>
          </div>

          {/* Right Column - Social Media Icons */}
          <div className="col-md-6 text-center text-md-end">
            <div className="social-icons d-flex justify-content-center justify-content-md-end gap-3">
              <a href="https://www.facebook.com/7iTECHSOLUTIONS/" aria-label="Facebook" target="_blank">
                <FaFacebookF />
              </a>
             
              <a href="https://www.instagram.com/7itech_solutions/" aria-label="Instagram" target="_blank">
                <FaInstagram />
              </a>
              <a href="https://in.linkedin.com/company/7itech-solutionss" aria-label="LinkedIn" target="_blank">
                <FaLinkedinIn />
              </a>
              <a href="https://www.youtube.com/@7itechsolutions" aria-label="YouTube" target="_blank">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
