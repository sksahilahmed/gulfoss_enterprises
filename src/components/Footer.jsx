import React from 'react';
import './Footer.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content grid-3">
          <div className="footer-section">
            <h4>About Gulfoss</h4>
            <p>Providing quality water can supply and cold drinking water services to villages and nearby areas.</p>
          </div>

          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <FaPhone /> <span>+91 9876543210</span>
              </div>
              <div className="contact-item">
                <FaWhatsapp /> <span>+91 9876543211</span>
              </div>
              <div className="contact-item">
                <FaEnvelope /> <span>info@gulfoss.com</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt /> <span>Village Main Road, Rural Area</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#" className="social-icon"><FaFacebook /></a>
              <a href="#" className="social-icon"><FaTwitter /></a>
              <a href="#" className="social-icon"><FaWhatsapp /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Gulfoss Enterprises. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
