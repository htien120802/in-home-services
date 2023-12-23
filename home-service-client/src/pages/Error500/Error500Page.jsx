import React from 'react';
import { Link } from 'react-router-dom';

import BannerSlider from 'components/BannerSlider/BannerSlider';

function ServerErrorPage() {
  return (
    <>
      <BannerSlider title="500 Internal Server Error" />

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">500 Internal Server Error</h3>
                </div>
                <div className="card-body">
                  <p>Sorry, something went wrong on our end. Please try again later.</p>
                  <p>If the issue persists, contact support for assistance.</p>
                </div>
              </div>

              <Link to="/" className="btn btn-secondary mt-3 mb-3">
                Back To Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServerErrorPage;
