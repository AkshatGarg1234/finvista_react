import React from 'react';
import './footer.css'; 

export default function Footer() {
  return (
    <footer className='mainfooter'>
      <div className="footer-content">
        <div className="footer-section about">
          <h2>About Us</h2>
          <p className='about'>FinVista is revolutionizing the way individuals manage their finances. With cutting-edge technology and intuitive users </p>
          <div className="contact">
            <div><i className="fas fa-phone"></i> 123-456-7890</div>
            <div><i className="fas fa-envelope"></i> FinVista@outlook.com</div>
          </div>
        </div>
        <div className="footer-section links">
          <h2>Quick Links</h2>
          <ul>
            <li><a href="#">Product</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Company</a></li>
          </ul>
        </div>
        <div className="footer-section social-links">
          <h2>Social</h2>
          <div className="social-icons">
          <img class="social-icon" width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png" alt="facebook-new"/>
<img class="social-icon" width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/twitter--v1.png" alt="twitter--v1"/>
<img class="social-icon" width="25" height="25" src="https://img.icons8.com/ios/50/FFFFFF/mail.png" alt="mail"/>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} FinVista. All rights reserved.
      </div>
    </footer>
  );
}
