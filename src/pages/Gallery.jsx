import React, { useState } from "react";

import { FaSearchPlus } from "react-icons/fa";
import Navbar from "../Navbar";
import python from "../assets/images/python.png"
// import simg from "../assets/images/sideimg.png"
import Address from "../Address";
import Whatsapp from "../Whatsapp";
import Footer from "../Footer";
import Socialmedia from "../Socialmedia";
import Rating from "../Rating";
import Toasts from "../Toasts";
import gallery1 from "../assets/images/gallery1.jpeg"
import gallery2 from "../assets/images/gallery2.jpeg"
import gallery3 from "../assets/images/gallery3.jpeg"
import gallery4 from "../assets/images/gallery4.jpeg"
import gallery5 from "../assets/images/gallery5.jpeg"
import gallery6 from "../assets/images/gallery6.jpeg"
import gallery7 from "../assets/images/gallery7.webp"
import gallery8 from "../assets/images/gallery8.png"

const images = [
 python,
 
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8
];

const Gallery = () => {
  const [zoomImg, setZoomImg] = useState(null);

  return (
    <>
    <Navbar/>
    <Socialmedia/>
    <Rating/>
    <Toasts/>
    <h1 className="text-center pt-5">Our Gallery</h1>
    <div className="gallery-container">
      <div className="gallery-grid">
        {images.map((img, index) => (
          <div className="gallery-item" key={index}>
            <img src={img} alt="" className="gallery-img" />
            <div className="zoom-overlay" onClick={() => setZoomImg(img)}>
              <FaSearchPlus className="zoom-icon" />
            </div>
          </div>
        ))}
      </div>

      {/* Zoom Modal */}
      {zoomImg && (
        <div className="zoom-modal" onClick={() => setZoomImg(null)}>
          <img src={zoomImg} alt="Zoomed" className="zoomed-image" />
        </div>
      )}
    </div>
    <Address/>
    <Whatsapp/>
    <Footer/>
    
    </>
  );
};

export default Gallery;
