import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../assets/jimmuB.png";
import "./Footer.css"; 

const scrollToSection = (sectionId) => {
  const section = document.querySelector(sectionId);

  // Adjust scrolling behavior with options
  section.scrollIntoView({
    behavior: 'smooth', // Smooth scrolling
    block: 'start',     // Scroll to the start of the section
  });
};

const Footer = () => {
  return (
    <section id='about'>
    <footer className="footer">
      <div className="footer-grid">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Navigate</h2>
          <ul className="footer-list">
            <li><a onClick={() => scrollToSection('#home')} className="footer-link">Home</a></li>
            <li><a  onClick={() => scrollToSection('#services')} className="footer-link">Services</a></li>
            {/* <li><a   className="footer-link">Blogs</a></li> */}
            
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Company</h2>
          <ul className="footer-list">
            <li><a onClick={() => scrollToSection('#about')} className="footer-link">About Us</a></li>
            <li><a href="" className="footer-link">Contact Us</a></li>
            <li><a href="" className="footer-link">Career</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h2 className="footer-heading">Learn</h2>
          <ul className="footer-list">
            <li><a onClick={() => scrollToSection('#Blogs')} className="footer-link">Blog</a></li>
            <li><a href="" className="footer-link">Ebooks</a></li>
          </ul>
        </div>

        <div className="footer-section last">
          <h2 className="footer-heading">Follow Us</h2>
          <ul className="footer-icons">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                <FaFacebook className="icon-facebook" />
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                <FaTwitter className="icon-twitter" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-icon-link">
                <FaInstagram className="icon-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-seperator"></div>

      <div className="footer-bottom">
        <p>&copy; WebMinds 2024. All Rights Reserved.</p>
      </div>
    </footer>
    </section>

  );

};

export default Footer;
