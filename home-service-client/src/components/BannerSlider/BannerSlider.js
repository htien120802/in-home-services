import React from 'react';

import PropTypes from 'prop-types';

function BannerSlider({ title }) {
  return (
    <div id="inner_pade" className="banner-slider">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="full">
              <h2>{title}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BannerSlider.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BannerSlider;
