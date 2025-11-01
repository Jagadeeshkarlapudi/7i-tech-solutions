import { useState } from 'react';

import logo from './assets/images/logo.png'
import Scrollbar from './Scrollbar';

function Navbar() {
     const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <Scrollbar/>
    <nav className="navbar">
      {/* Left Menu */}
      <div className="nav-left desktop-menu">
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Courses</a>
      </div>

      {/* Center Logo */}
      <div className="nav-logo">
        <a href=""><img src={logo} alt="" /></a>
      </div>

      {/* Right Menu */}
      <div className="nav-right desktop-menu">
        <a href="#">Portfolio</a>
        <a href="#">Soft Skills</a>
        <a href="#">Contact</a>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <a href="#">Home</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Portfolio</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
    </nav>
    </>
  );
}

export default Navbar;