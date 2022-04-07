import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Easy <span>Rent</span>
          </h3>

          <p className="footer-links">
            <a href="#">Home</a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Easy Rent &copy; 2022</p>
        </div>

        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>200 Revolution Street Dhaka</span> Dhaka , Bangladesh
            </p>
          </div>

          <div>
            <i className="fa fa-phone"></i>
            <p>+18834384933</p>
          </div>

          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto:support@company.com">teamdevager21@gmail.com </a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            We Provide New Generataion Car for Rent (Easy Rent) .
          </p>

          <div className="footer-icons">
            <a href="#">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
