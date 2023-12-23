import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="wsus__about mt_100 xs_mt_70 mb_100 xs_mb_70">
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-md-12 col-lg-6">
            <div className="wsus__about_img">
              <img src="https://demo.websolutionus.com/aabcserv/uploads/website-images/about-us-bg-2022-08-28-01-05-24-2606.jpg" alt="about" className="img-fluid w-100 img_1" />
              <img src="https://demo.websolutionus.com/aabcserv/uploads/website-images/about-us-foreground-2022-08-28-01-05-24-9243.jpg" alt="about" className="img-fluid w-100 img_2" />
              <div className="wus__about_rating">
                <img src="https://demo.websolutionus.com/aabcserv/uploads/website-images/about-us-client-one-2022-08-28-01-13-54-7019.png" alt="about" className="img-fluid w-100 rating_img_1" />
                <img src="https://demo.websolutionus.com/aabcserv/uploads/website-images/about-us-client-one-2022-08-28-01-14-58-9497.png" alt="about" className="img-fluid w-100 rating_img_2" />
                <img src="https://demo.websolutionus.com/aabcserv/uploads/website-images/about-us-client-one-2022-08-28-01-14-58-4843.png" alt="about" className="img-fluid w-100 rating_img_3" />
                <p>
                  {' '}
                  25k+
                  <span>
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                    <i className="fas fa-star" aria-hidden="true" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12 col-lg-6">
            <div className="wsus__about_text">
              <h2>Know About Us</h2>
              <p style={{ fontSize: '16px', fontFamily: 'Roboto, sans-serif' }}>What sets Websolutionus apart, we believe in our commitment to providing actual value to our consumers. In the business, our dedication and quality are unrivaled. We're more than a technology service provider. We care as much about our customer’s achievements as we do about our own, therefore we share business risks with them so they may take chances with technological innovations. We provide the following services.</p>
              <ul>
                <li>Laravel Website Development</li>
                <li>Mobile Application Development</li>
                <li>WordPress Theme Development</li>
                <li>Search Engine Optimization (SEO)</li>
              </ul>

              <Link to="/contact" className="common_btn">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
