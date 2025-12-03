import React from "react";
import Navbar from "../Navbar";
import Address from "../Address";
import Footer from "../Footer";
import Socialmedia from "../Socialmedia";
import Whatsapp from "../Whatsapp";
import Rating from "../Rating";
import OurCourses from "../Ourcources";
import poster from "../assets/images/poster.jpeg"
import Toasts from "../Toasts";

import {gb} from "../data/fspythontopics" 
import { marketing } from "../data/fspythontopics";
import { intro } from "../data/fspythontopics";
import { SEO } from "../data/fspythontopics";
import { keyword } from "../data/fspythontopics";
import { google } from "../data/fspythontopics";
import { SMO } from "../data/fspythontopics";
import { facebook } from "../data/fspythontopics";
import { instagram } from "../data/fspythontopics";
import { youtube } from "../data/fspythontopics";

function DigitalMarketing() {

  return (
    <>
    <Navbar/>
    <Socialmedia/>
    <Rating/>
    <Toasts/>
    <div className="fullstack-section">
    <div className="container  py-5 position-relative">
      {/* Background shapes */}
      <div className="bg-shape shape1"></div>
      <div className="bg-shape shape2"></div>

      <div className="row justify-content-center align-items-start">
        {/* LEFT SIDE */}
        <div className="col-lg-9 col-md-7 col-12 mb-4">
          <h2 className="fw-bold text-primary mb-3">Digital Marketing</h2>
          <p className="text-muted mb-4">
            Digital marketing is the promotion of products and services using online channels and digital technologies like websites, social media, and email. It encompasses a wide range of tactics, including search engine optimization (SEO), pay-per-click (PPC) advertising, content marketing, and social media marketing, to reach and engage with potential customers online. 
          </p>

          {/* FRONTEND */}
          <h4 className="fw-semibold text-secondary mb-3">Digital Marketing Course Curriculum</h4>
          <div className="accordion mb-4" id="frontendAccordion">
            {/* HTML */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHtml">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseHtml"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Marketing Basic
                </button>
              </h2>
              <div
                id="collapseHtml"
                className="accordion-collapse collapse "
                aria-labelledby="headingHtml"
                data-bs-parent="#frontendAccordion"
              >
                <div className="accordion-body">
                  <div className="row g-1">
            {marketing.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="topic-box">
                  • {item}
                </div>
              </div>
            ))}
          </div>
                </div>
              </div>
            </div>

            {/* CSS */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingCss">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseCss"
                  aria-expanded="false"
                  aria-controls="collapseCss"
                >
                  Introduction to Digital Marketing
                </button>
              </h2>
              <div
                id="collapseCss"
                className="accordion-collapse collapse"
                aria-labelledby="headingCss"
                data-bs-parent="#frontendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {intro.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="topic-box">
                  • {item}
                </div>
              </div>
            ))}
          </div>
                </div>
              </div>
            </div>

            {/* BOOTSTRAP */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingBootstrap">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseBootstrap"
                  aria-expanded="false"
                  aria-controls="collapseBootstrap"
                >
                  Introduction to SEO
                </button>
              </h2>
              <div
                id="collapseBootstrap"
                className="accordion-collapse collapse"
                aria-labelledby="headingBootstrap"
                data-bs-parent="#frontendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {SEO.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="topic-box">
                  • {item}
                </div>
              </div>
            ))}
          </div>
                </div>
              </div>
            </div>

            {/* JAVASCRIPT */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingJs">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseJs"
                  aria-expanded="false"
                  aria-controls="collapseJs"
                >
                  Keyword Analysis
                </button>
              </h2>
              <div
                id="collapseJs"
                className="accordion-collapse collapse"
                aria-labelledby="headingJs"
                data-bs-parent="#frontendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {keyword.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="topic-box">
                  • {item}
                </div>
              </div>
            ))}
          </div>
                </div>
              </div>
            </div>

            {/* REACT */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingGoogle">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseGoogle"
                  aria-expanded="false"
                  aria-controls="collapseGoogle"
                >
                  Google Adwords
                </button>
              </h2>
              <div
                id="collapseGoogle"
                className="accordion-collapse collapse"
                aria-labelledby="headingGoogle"
                data-bs-parent="#frontendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {google.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="topic-box">
                  • {item}
                </div>
              </div>
            ))}
          </div>
                </div>
              </div>
            </div>

             <div className="accordion-item">
              <h2 className="accordion-header" id="headingReact">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSMO"
                  aria-expanded="false"
                  aria-controls="collapseReact"
                >
                 Social Media Marketing (SMM)
                </button>
              </h2>
              <div
                id="collapseSMO"
                className="accordion-collapse collapse"
                aria-labelledby="headingReact"
                data-bs-parent="#frontendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {SMO.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="topic-box">
                  • {item}
                </div>
              </div>
            ))}
          </div>
                </div>
              </div>
            </div>

             <div className="accordion-item">
              <h2 className="accordion-header" id="headingReact">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFacebook"
                  aria-expanded="false"
                  aria-controls="collapseReact"
                >
                  Facebook Marketing
                </button>
              </h2>
              <div
                id="collapseFacebook"
                className="accordion-collapse collapse"
                aria-labelledby="headingReact"
                data-bs-parent="#frontendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {facebook.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="topic-box">
                  • {item}
                </div>
              </div>
            ))}
          </div>
                </div>
              </div>
            </div>
             <div className="accordion-item">
              <h2 className="accordion-header" id="headingReact">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseInstagram"
                  aria-expanded="false"
                  aria-controls="collapseReact"
                >
                  Instagrm Marketing
                </button>
              </h2>
              <div
                id="collapseInstagram"
                className="accordion-collapse collapse"
                aria-labelledby="headingReact"
                data-bs-parent="#frontendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {instagram.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="topic-box">
                  • {item}
                </div>
              </div>
            ))}
          </div>
                </div>
              </div>
            </div>

             <div className="accordion-item">
              <h2 className="accordion-header" id="headingReact">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseYT"
                  aria-expanded="false"
                  aria-controls="collapseReact"
                >
                  YouTube Marketing
                </button>
              </h2>
              <div
                id="collapseYT"
                className="accordion-collapse collapse"
                aria-labelledby="headingReact"
                data-bs-parent="#frontendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {youtube.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="topic-box">
                  • {item}
                </div>
              </div>
            ))}
          </div>
                </div>
              </div>
            </div>


             <div className="accordion-item">
              <h2 className="accordion-header" id="headingGB">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseGB"
                  aria-expanded="false"
                  aria-controls="collapseGB"
                >
                  Google My Business Listing
                </button>
              </h2>
              <div
                id="collapseGB"
                className="accordion-collapse collapse"
                aria-labelledby="headingGB"
                data-bs-parent="#frontendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {gb.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-4">
                <div className="topic-box">
                  • {item}
                </div>
              </div>
            ))}
          </div>
                </div>
              </div>
            </div>



          </div>
          </div>

        {/* RIGHT SIDE CARD */}
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
    <div className="row mb-5 text-center">
      <div className="col">
        <a href=""><button className="btn btn-primary">Download Cource Content</button></a>
      </div>
    </div>
    </div>
    <OurCourses/>
    <Whatsapp/>
    <Address/>
    <Footer/>
    </>
  );
}

export default DigitalMarketing;
