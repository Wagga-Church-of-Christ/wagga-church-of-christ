import React from 'react';
import './Footer.scss';

const Footer = (props) => {
  return (
    <div className="footer">
      <div className="footer-links">
        <a href="/">Home</a><span className="footer-link-slash">/</span>
        <a href="/who-we-are">Who we are</a><span className="footer-link-slash">/</span>
        <a href="/what-we-believe">What we believe</a><span className="footer-link-slash">/</span>
        <a href="/whats-on">What's on</a><span className="footer-link-slash">/</span>
        <a href="/sermons">Sermons</a>
        {/* <a href="/focus">The Focus</a><span className="footer-link-slash">/</span> */}
        {/* <a href="/contact">Contact</a> */}
      </div>
      <div className="row">
        <div className="col-sm">
          <p>Wagga Church of Christ<br />49 Fernleigh Rd, Turvey Park, 2650<br />2019 &copy; Wagga Church of Christ</p>
          <br />
          <p><a href="https://app.contentful.com/spaces/ge1yh6v33o8l">Edit page content</a></p>
        </div>
        <div className="col-sm">
          <p>Contact us: <a href="mailto:waggachurchofchristpastor@gmail.com">waggachurchofchristpastor@gmail.com</a></p>
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
