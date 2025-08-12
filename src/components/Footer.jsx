import React from "react";
import "../assets/footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <p>LOGO</p>
          </div>
        </div>

        <div className="footer-feedback">
          <p>Feedback</p>
        </div>

        <div className="footer-center">
          <p>Quick Links</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
        </div>

        <div className="footer-right">
          <p>Contact Us</p>
          <div className="social-icons">
            <img
              src="/instagram.png"
              alt="Instagram"
              className="instagram"
            />
            <img
              src="/facebook.png"
              alt="Facebook"
              className="facebook"
            />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>Copyright © 2024 abc, Inc. All Rights Reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
