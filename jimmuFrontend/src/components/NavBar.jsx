import React from 'react';
import '../css/NavBar.css'; // Import the external CSS file

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);

  // Adjust scrolling behavior with options
  section.scrollIntoView({
    behavior: 'smooth', // Smooth scrolling
    block: 'start',     // Scroll to the start of the section
  });
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button onClick={() => scrollToSection('#services')} className="navbar-link">
            Our Services
          </button>
        </li>
        <li className="navbar-item">
          <button onClick={() => scrollToSection('#Blogs')} className="navbar-link">
            Blogs
          </button>
        </li>
        <li className="navbar-item">
          <button onClick={() => scrollToSection('#about')} className="navbar-link">
            About Us
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
