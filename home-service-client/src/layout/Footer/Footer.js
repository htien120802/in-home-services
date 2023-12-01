import React from 'react';

import { LOCATION } from 'constants/index';

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="full footer_top">
              <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="full f_logo">
                      <img src="/assets/img/logo.png" alt="#" />
                    </div>
                    <div className="full">
                      <p>
                        consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt
                        ut labore et dolore magna strud
                        exercitation
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="full heading_footer">
                      <h3>Menu</h3>
                    </div>
                    <div className="full">
                      <ul className="footer_link">
                        <li><a href={LOCATION.HOME}>Home</a></li>
                        <li><a href={LOCATION.ABOUT}>About</a></li>
                        <li><a href={LOCATION.SERVICES}>Services</a></li>
                        <li><a href={LOCATION.REVIEWS}>Reviews</a></li>
                        <li><a href={LOCATION.CONTACT}>Contact us</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="full heading_footer">
                      <h3>Instagram</h3>
                    </div>
                    <div className="full">
                      <ul className="footer_link_intas">
                        <li>
                          <span><img src="/assets/images/f_in_blog.png" alt="#" /></span>
                          <span>Consectetur Adipiscing</span>
                        </li>
                        <li>
                          <span><img src="/assets/images/f_in_blog2.png" alt="#" /></span>
                          <span>Consectetur Adipiscing</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row margin_top_50">
                      <div className="col-md-10 offset-md-1">
                        <div className="row">
                          <div className="col-sm-4">
                            <div className="full cont_info">
                              <i className="fa fa-map-marker" />
                              <span>Location</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="full cont_info">
                              <i className="fa fa-phone" />
                              <span>Call +01 1234 567 890</span>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="full cont_info">
                              <i className="fa fa-envelope" style={{ fontSize: '17px' }} />
                              <span>demo@gmail.com</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
