import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

function Cpy() {
  return (
    <div className="cpy">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full center">
              <ul className="social_icon">
                <li><a href="/" aria-label="Facebook"><FontAwesomeIcon icon={faFacebookF} /></a></li>
                <li><a href="/" aria-label="Twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
                <li><a href="/" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
                <li><a href="/" aria-label="Instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
                <li><a href="/" aria-label="YouTube"><FontAwesomeIcon icon={faYoutube} /></a></li>
              </ul>
            </div>
            <div className="full text_align_center">
              <p>
                © 2020 All Rights Reserved.
                {' '}
                <a href="https://html.design">html.design</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cpy;
