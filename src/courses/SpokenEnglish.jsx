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

import { unit1, unit10, unit11, unit12, unit13 } from "../data/fspythontopics";
import { unit2 } from "../data/fspythontopics";
import { unit3 } from "../data/fspythontopics";
import { unit4 } from "../data/fspythontopics";
import { unit5 } from "../data/fspythontopics";
import { unit6 } from "../data/fspythontopics";
import { unit7 } from "../data/fspythontopics";
import { unit8 } from "../data/fspythontopics";
import { unit9 } from "../data/fspythontopics";

function SpokenEnglish() {

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
          <h2 className="fw-bold text-primary mb-3">Spoken English</h2>
          <p className="text-muted mb-4">
            Spoken English is the act of communicating through spoken words and sentences in the English language, crucial for clear and effective communication in everyday life. To improve, focus on consistent practice, active listening, and building confidence, rather than solely on complex grammar.
          </p>

          {/* FRONTEND */}
          <h4 className="fw-semibold text-secondary mb-3">Foundation of Communication</h4>
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
                  Understanding English as a Language
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
            {unit1.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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
                  Building Blocks of English
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
            {unit2.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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
                  Everyday Functional English
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
            {unit3.map((item, i) => (
              <div key={i} className="col-12 col-md-12 col-lg-12">
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

          {/* BACKEND (Python) */}
          <h4 className="fw-semibold text-secondary mb-3">Grammar for Real Communication</h4>
          <div className="accordion mb-4" id="backendAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingPyBasic">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePyBasic"
                  aria-expanded="true"
                  aria-controls="collapsePyBasic"
                >
                  Tenses with Spoken Applications
                </button>
              </h2>
              <div
                id="collapsePyBasic"
                className="accordion-collapse collapse"
                aria-labelledby="headingPyBasic"
                data-bs-parent="#backendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {unit4.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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
              <h2 className="accordion-header" id="headingPyAdv">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsePyAdv"
                  aria-expanded="false"
                  aria-controls="collapsePyAdv"
                >
                  Smart Grammar Tools
                </button>
              </h2>
              <div
                id="collapsePyAdv"
                className="accordion-collapse collapse"
                aria-labelledby="headingPyAdv"
                data-bs-parent="#backendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {unit5.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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

          {/* SQL */}
          <h4 className="fw-semibold text-secondary mb-3">Vocabulary & Expression Development</h4>
          <div className="accordion" id="sqlAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSqlBasic">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSqlBasic"
                  aria-expanded="true"
                  aria-controls="collapseSqlBasic"
                >
                  Life-Based Vocabulary
                </button>
              </h2>
              <div
                id="collapseSqlBasic"
                className="accordion-collapse collapse"
                aria-labelledby="headingSqlBasic"
                data-bs-parent="#sqlAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {unit6.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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
              <h2 className="accordion-header" id="headingSqlAdv">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSqlAdv"
                  aria-expanded="false"
                  aria-controls="collapseSqlAdv"
                >
                  Fluency Enhancers
                </button>
              </h2>
              <div
                id="collapseSqlAdv"
                className="accordion-collapse collapse"
                aria-labelledby="headingSqlAdv"
                data-bs-parent="#sqlAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {unit7.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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


            {/* level4 */}

                 <h4 className="fw-semibold text-secondary my-3">Real Conversation Practice</h4>
          <div className="accordion" id="level4">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headunit8">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#unit8"
                  aria-expanded="true"
                  aria-controls="unit8"
                >
                  Situational Dialogues
                </button>
              </h2>
              <div
                id="unit8"
                className="accordion-collapse collapse"
                aria-labelledby="headunit8"
                data-bs-parent="#level4"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {unit8.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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
              <h2 className="accordion-header" id="headunit9">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#unit9"
                  aria-expanded="false"
                  aria-controls="unit9"
                >
                  Role Plays & Activity Sessions
                </button>
              </h2>
              <div
                id="unit9"
                className="accordion-collapse collapse"
                aria-labelledby="headunit9"
                data-bs-parent="#level4"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {unit9.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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


          {/* level5 */}

              <h4 className="fw-semibold text-secondary my-3">Accent & Pronunciation Mastery</h4>
          <div className="accordion" id="level5">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headunit10">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#unit10"
                  aria-expanded="true"
                  aria-controls="unit10"
                >
                  Phonetics for Beginners
                </button>
              </h2>
              <div
                id="unit10"
                className="accordion-collapse collapse"
                aria-labelledby="headunit10"
                data-bs-parent="#level5"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {unit10.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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
              <h2 className="accordion-header" id="headunit11">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#unit11"
                  aria-expanded="false"
                  aria-controls="unit11"
                >
                  Presenting Ideas Confidently
                </button>
              </h2>
              <div
                id="unit11"
                className="accordion-collapse collapse"
                aria-labelledby="headunit11"
                data-bs-parent="#level5"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {unit11.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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

{/* level6 */}


              <h4 className="fw-semibold text-secondary my-3">Public Speaking & Career Communication</h4>
          <div className="accordion" id="level6">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headunit12">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#unit12"
                  aria-expanded="true"
                  aria-controls="unit12"
                >
                  Professional English
                </button>
              </h2>
              <div
                id="unit12"
                className="accordion-collapse collapse"
                aria-labelledby="headunit12"
                data-bs-parent="#level6"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {unit12.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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
              <h2 className="accordion-header" id="headunit13">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#unit13"
                  aria-expanded="false"
                  aria-controls="unit13"
                >
                  Reading, Listening & Writing Enhancement
                </button>
              </h2>
              <div
                id="unit13"
                className="accordion-collapse collapse"
                aria-labelledby="headunit13"
                data-bs-parent="#level6"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {unit13.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-lg-12">
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
        <a href="../assets/docs/PYTHON_COURSE_CONTENT3D.pdf" download ><button className="btn btn-primary" >Download Cource Content</button></a>
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

export default SpokenEnglish;
