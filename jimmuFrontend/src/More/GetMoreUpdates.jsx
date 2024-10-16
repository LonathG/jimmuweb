import React from 'react';
import './GetMoreUpdates.css';

const GetMoreUpdates = () => {
  // Function to construct the mailto link
  const handleEmail = () => {
    const subject = "Newsletter Subscription"; // Subject of the email
    const body = "I would like to subscribe to the newsletter."; // Body of the email
    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open the mailto link
    window.location.href = mailtoLink;
  };

  // Function to handle the phone call
  const handleCall = () => {
    window.location.href = 'tel:+447983637117'; 
  };

  return (
    <div className="subscription-box">
      <div>
        <h1>
          Get in touch with us <br />
          <span className="gradient-text font-bold text-[30px]">via Call or Email</span>
        </h1>
        <h4>
          Stay updated on the latest services with us.
        </h4>
      </div>
      <form className="subscription-form" onSubmit={(e) => { e.preventDefault(); handleEmail(); }}>

        <button type="button" className="subscription-button" onClick={handleCall}>Call Us</button>

        <button type="submit" className="additional-button">Email Us</button>
      </form>
    </div>
  );
  
};

export default GetMoreUpdates;
