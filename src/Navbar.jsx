import React, { useState } from "react";
import logo from "./assets/images/logo.png";
import Scrollbar from "./Scrollbar";
import { button, label } from "framer-motion/client";
import { href } from "react-router-dom";



const MENU = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutus/" },
  { label:"Gallery", href:"/gallery/"},
  {
    label: "Courses",
    children: [
      {
        label: "Full Stack",
        children: [
          { label: "Python Full Stack", href: "/full-stack-python/" },
          { label: "Java Full Stack", href: "/full-stack-java/" },
          { label: "PHP Full Stack", href: "/full-stack-php/" },
          { label: ".NET Full Stack", href: "/full-stack-dotnet/" },
          
        ],
      },
      {
        label: "Digital Marketing",
       href:"/digital-marketing/"
      },
      {
        label: "UI/UX",
        href:"/ui-ux/"
      },
      {
        label: "UI React",
        href:"/react/"
      },
      {
        label:"UI Angular",
        href:"/angular/"
      },
      {
        label:"Spoken English",
        href:"/spoken-english/"
      }
    ],
  },
  { label: "Portfolio", href: "#" },
  { label: "Soft Skills", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Login", href:"#"}
];

function Navbar() {
 
  const [menuOpen, setMenuOpen] = useState(false); // mobile main menu
  const [openKeys, setOpenKeys] = useState({}); // track open submenus on mobile
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit =  async (e) => {
    e.preventDefault();
    if (validate()) {
      alert(`Thank you ${form.name}! We’ll contact you soon.`);
      setShowModal(false);
      setForm({ name: "", phone: "" , course:""});
    }
   const formData = new FormData(e.target);
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: json,
  });

  const result = await res.json();
  // console.log(result);

  if (result.success) {
    alert("Form submitted successfully!");
  } else {
    alert("Something went wrong!");
  }
  };


  // Toggle a submenu by a key (e.g., "Courses", "Courses>Full Stack")
  const toggleKey = (key) => {
    setOpenKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Render helper for menu recursion
  const renderMenu = (items, parentKey = "") =>
    items.map((it, idx) => {
      const key = parentKey ? `${parentKey}>${it.label}` : it.label;
      const hasChildren = Array.isArray(it.children) && it.children.length > 0;

      return (
        
        <div

          className={`nav-item ${hasChildren ? "has-children" : ""}`}
          key={key}
        >
        
          {/* For top-level items that are not dropdowns show anchor */}
          {!hasChildren && (
            <a href={it.href || "#"} className="nav-link" onClick={() => setMenuOpen(false)}>
              {it.label}
            </a>
          )}

          {/* If it has children, show a button/anchor that toggles on mobile */}
          {hasChildren && (
            <>
              <button
                className="nav-link dropdown-toggle-btn"
                aria-expanded={!!openKeys[key]}
                onClick={(e) => {
                  e.preventDefault();
                  // on desktop hover handles it; for mobile we handle toggle
                  toggleKey(key);
                }}
                onMouseDown={(e) => e.preventDefault()} // prevent focus flicker on mobile
              >
                {it.label}
                <span className={`caret ${openKeys[key] ? "open" : ""}`}>▾</span>
              </button>

              {/* Dropdown menu: on desktop shown by CSS hover; on mobile controlled by openKeys */}
              <div
                className={`dropdown-menu ${openKeys[key] ? "open" : ""}`}
                role="menu"
                aria-hidden={!openKeys[key]}
              >
                {renderMenu(it.children, key)}
              </div>
            </>
          )}
        </div>
      );
    });

  return (
    <>
    <Scrollbar/>
  
      <nav className="navbar fixed-top">
       
        <div className="nav-left desktop-menu">
          {renderMenu(MENU.slice(0, 3))} {/* Home, About on left */}
          {/* Render Courses inside left as hover-menu on desktop */}
          <div className="dropdown desktop-only">
            <a href="#" className="dropdown-toggle">Courses </a>
            <div className="dropdown-menu">{renderMenu(MENU[3].children, "Courses")}</div>
          </div>
        </div>

        <div className="nav-logo">
          <a href="#"><img src={logo} alt="Logo" /></a>
        </div>

        <div className="nav-right desktop-menu">
          
          <a href="/softskills/">Soft Skills</a>
          <a href="/contact/">Contact</a>
          <a href=""><button className="btn btn-blue  px-4 rounded-pill">Login</button></a>
          <button className="btn btn-primary rounded-pill"  onClick={() => setShowModal(true)}
        style={{
          animation:
            "heartbeat 1.3s infinite ease-in-out, blink 2.2s infinite ease-in-out",
        }}>Free demo</button>

         {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">Book Your Free Demo</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>

              <div className="modal-body">
              <form  onSubmit={handleSubmit} noValidate>

  {/* Web3Forms Required Hidden Fields */}
  <input type="hidden" name="access_key" value="17303a76-f0b2-4223-ab35-2be9736cb586" />
  <input type="hidden" name="subject" value="New Contact Form Enquiry" />
  <input type="hidden" name="from_name" value="7i Tech Solutions Website" />

  <div className="mb-3 text-start">
    <input
      type="text"
      name="name"
      className={`form-control ${errors.name ? "is-invalid" : ""}`}
      placeholder="Enter your name"
      value={form.name}
      onChange={(e) => setForm({ ...form, name: e.target.value })}
      required
    />
    {errors.name && <div className="invalid-feedback">{errors.name}</div>}
  </div>

  <div className="mb-3 text-start">
    <input
      type="text"
      name="phone"
      className={`form-control ${errors.phone ? "is-invalid" : ""}`}
      placeholder="Enter your 10-digit phone number"
      value={form.phone}
      onChange={(e) => setForm({ ...form, phone: e.target.value })}
      required
    />
    {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
  </div>

  {/* Optional Course Dropdown */}
  <div className="mb-3 text-start">
    <select
      name="course"
      className="form-control"
      value={form.course || ""}
      onChange={(e) => setForm({ ...form, course: e.target.value })}
    >
      <option value="">Select Course (Optional)</option>
      <option value="Spoken English">Spoken English</option>
      <option value="Python Full Stack">Python Full Stack</option>
      <option value="Java Full Stack">Java Full Stack</option>
      <option value="MERN Full Stack">MERN Full Stack</option>
      <option value="Data Science">Data Science</option>
    </select>
  </div>

  <button type="submit" className="btn btn-primary w-100 mt-2">
    Submit
  </button>
</form>


              </div>
            </div>
          </div>
        </div>
      )}
          
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <div></div><div></div><div></div>
        </div>

        {/* Mobile menu (uses the recursive renderMenu, which supports expansion) */}
        <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
          <div className="mobile-menu-inner">{renderMenu(MENU)}</div>
        </div>
      </nav>
      {/* to prevent page content under fixed navbar */}
      <div style={{ height: 65 }} aria-hidden="true"></div>
    </>
  );
}

export default Navbar;
