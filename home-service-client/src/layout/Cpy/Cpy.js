import React from 'react';

function Cpy() {
  return (
    <div className="cpy">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="full center">
              <ul className="social_icon">
                <li><a href="/" aria-label="Facebook"><i className="fa fa-facebook-f" /></a></li>
                <li><a href="/" aria-label="Twitter"><i className="fa fa-twitter" /></a></li>
                <li><a href="/" aria-label="LinkedIn"><i className="fa fa-linkedin" /></a></li>
                <li><a href="/" aria-label="Instagram"><i className="fa fa-instagram" /></a></li>
                <li><a href="/" aria-label="YouTube"><i className="fa fa-youtube-play" /></a></li>
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
