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
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="YouTube">
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
