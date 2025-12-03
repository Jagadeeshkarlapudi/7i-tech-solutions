// import FrontReact from "FrontReact";
import Navbar from "../Navbar";
import Address from "../Address";
import Footer from "../Footer";
import Socialmedia from "../Socialmedia";
import Whatsapp from "../Whatsapp";
import Rating from "../Rating";
import OurCourses from "../Ourcources";
import poster from "../assets/images/poster.jpeg"
import Toasts from "../Toasts";

import { htmltopics } from "../data/fspythontopics";
import { csstopics } from "../data/fspythontopics";
import { bstopics } from "../data/fspythontopics";
import { jstopics } from "../data/fspythontopics";
import { reacttopics } from "../data/fspythontopics";
// import { pybasictopics } from "../data/fspythontopics";
// import { pyadtopics } from "../data/fspythontopics";
// import { djangotopics } from "../data/fspythontopics";
// import { sqlbstopics } from "../data/fspythontopics";
// import { sqladtopics } from "../data/fspythontopics";
function FrontReact() {

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
          <h2 className="fw-bold text-primary mb-3">UI with FrontReact</h2>
          <p className="text-muted mb-4">
            Learn the complete UI with React course — React is a JavaScript library specifically designed for building user interfaces (UIs). It achieves this by allowing developers to create reusable, self-contained units of UI called "components".
          </p>

          {/* FRONTEND */}
          <h4 className="fw-semibold text-secondary mb-3">Frontend</h4>
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
                  HTML
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
            {htmltopics.map((item, i) => (
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
                  CSS
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
            {csstopics.map((item, i) => (
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
                  Bootstrap
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
            {bstopics.map((item, i) => (
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
                  JavaScript
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
            {jstopics.map((item, i) => (
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

            {/* FrontReact */}
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingFrontReact">
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFrontReact"
                  aria-expanded="false"
                  aria-controls="collapseFrontReact"
                >
                  FrontReact
                </button>
              </h2>
              <div
                id="collapseFrontReact"
                className="accordion-collapse collapse"
                aria-labelledby="headingFrontReact"
                data-bs-parent="#frontendAccordion"
              >
                <div className="accordion-body">
                      <div className="row g-1">
            {reacttopics.map((item, i) => (
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

export default FrontReact;
