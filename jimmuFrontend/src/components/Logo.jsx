import React from 'react';
import '../css/Logo.css'; // Import the external CSS file
import Logo1 from '../assets/jimmuB.png'


const Logo = () => {
  return (
    <div className="logo-container">
      
      <img 
        src={Logo1} // Replace with the actual path to your logo image
        alt="Logo"
        className="logo-image"
      />
    </div>
  );
};

export default Logo;
