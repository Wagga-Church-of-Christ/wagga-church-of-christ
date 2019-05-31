import React from 'react';
import './Footer.scss';

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="/">Home</a><span className="footer-link-slash">/</span>
        <a href="/about">About Us</a><span className="footer-link-slash">/</span>
        <a href="/sermons">Sermons</a><span className="footer-link-slash">/</span>
        <a href="/focus">The Focus</a><span className="footer-link-slash">/</span>
        <a href="/contact">Contact</a>
      </div>
      <div className="row">
        <div className="col-sm">
          <p>Wagga Church of Christ<br />49 Fernleigh Rd, Turvey Park, 2650<br />2019 &copy; Wagga Church of Christ</p>
        </div>
        <div className="col-sm">
          {/* <p className="footer-social-title">STAY CONNECTED</p>
          <div className="footer-social-links">
            <a href="https://www.facebook.com/Saintfield-Baptist-Church-105178506183089/"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/SaintfieldBC"><i className="fab fa-twitter"></i></a>
          </div> */}
        </div>
        <div className="col-sm d-none d-sm-none d-md-none d-lg-block">
          <img alt="footer-logo" className="footer-logo float-right" src="/logos/logo-512.png" />
        </div>
      </div>
    </div>
  )
};

export default Footer;
