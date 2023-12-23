import React from 'react';
import { Link } from 'react-router-dom';

import BannerSlider from 'components/BannerSlider/BannerSlider';

function BookingFailedPage() {
  return (
    <>
      <BannerSlider title="Booking Failed" />

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Booking Failed</h3>
                </div>
                <div className="card-body">
                  <p>Sorry, your booking could not be completed at this time. Please try again later.</p>
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

export default BookingFailedPage;
