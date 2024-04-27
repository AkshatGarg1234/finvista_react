import React from 'react';
import './Contact.css';
import contactImage from './fin.jpg';

const Contact = () => {
  return (
    <div className="contact-us-container">
      <div className="contact-details">
      <div className="contact-option">
        <h3>Email</h3>
        <p>FinBuzz@outlook.com</p>
      </div>
      <div className="contact-option">
        <h3>Phone</h3>
        <p>+1234567890</p>
      </div>
      <div className="contact-option">
            <h3>Address</h3>
            <p>1234 Elm Street, Apartment 5A, Springfield, IL 62701, United States</p>
          </div>
      <div className="contact-option">
        <h3>Social Media</h3>
        <p>Follow us on social media</p>
      </div>
     
      </div>
      <div className="contact-image">
        <img src={contactImage} alt="Contact" />
      </div>
    </div>
  );
}

export default Contact;
