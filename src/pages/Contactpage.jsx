import { useState } from "react";
import Address from "../Address";
import Footer from "../Footer";
import Navbar from "../Navbar";
import Rating from "../Rating";
import Socialmedia from "../Socialmedia";
import Toasts from "../Toasts";
import Whatsapp from "../Whatsapp";
import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from "react-icons/fa";




function Contactpage() {
    
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
     
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!/^[0-9]{10}$/.test(formData.phone))
      newErrors.phone = "Enter a valid 10-digit phone number";

    // if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
    //   newErrors.email = "Enter a valid email including '@'";

    // if (!formData.course) newErrors.course = "Please select a course";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form submitted successfully!");
      setFormData({ name: "", phone: "", email: "", course: "" });
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
    return (  
        <div>

            <Navbar/>
            <Rating/>
            <Toasts/>
            <Socialmedia/>
<section className="contact-section">
    <div className="container">
      <div className="contact-container">

     <div className="contact-left">
  <h2>Contact Us</h2>
  <p>Reach out to us for any course or project support. We're here to help you grow.</p>

  <div className="detail-box">📍 Address: <a href="#address">Click here</a></div>
  <div className="detail-box"><a href="tel: 7207775642" className="text-dark">📞 Phone: +91 7207775642</a></div>
  <div className="detail-box"><a href="mailto: info@7itechsolutions.com" className="text-dark">✉ Email: info@7itechsolutions.com</a></div>

  <div className="detail-box">
    <h3>Follow Us</h3>
    <div className="social-icons">
      <span className="social-icon facebook"><a href="https://in.linkedin.com/company/7itech-solutionss" target="_blank" className="text-white"><FaFacebookF/></a></span>
      <span className="social-icon instagram"><a href="https://www.instagram.com/7itech_solutions/" target="_blank" className="text-white"><FaInstagram/></a></span>
      <span className="social-icon youtube"><a href="https://www.youtube.com/@7itechsolutions" target="_blank" className="text-white"><FaYoutube/></a></span>
      <span className="social-icon linkedin"><a href="https://in.linkedin.com/company/7itech-solutionss" target="_blank" className="text-white"><FaLinkedinIn/></a></span>
    </div>
  </div>
</div>


            <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="17303a76-f0b2-4223-ab35-2be9736cb586" />
  <input type="hidden" name="subject" value="New Contact Form Enquiry" />
  <input type="hidden" name="from_name" value="7i Tech Solutions Website" />
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="text"
              name="phone"
              placeholder="Enter Phone"
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error">{errors.phone}</span>}

            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <select name="course" value={formData.course} onChange={handleChange}>
              <option value="">Select Course</option>
              <option value="Frontend">Frontend Development</option>
              <option value="Python Fullstack">Python Fullstack</option>
              <option value="Java Fullstack">Java Fullstack</option>
              <option value="Data Science">Data Science</option>
            </select>
            {errors.course && <span className="error">{errors.course}</span>}

            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>

      </div>
      </div>
    </section>
            <Whatsapp/>
            <Address/>
            <Footer/>


        </div>
    );
}

export default Contactpage;