import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import { actionGetProviderBookingReview } from 'store/actions';

import Pagination from 'pages/Customer/CustomerProfile/Order/Pagination/Pagination';

function ProviderReviewPage() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.Booking.bookingReviews);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = bookings?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    dispatch(actionGetProviderBookingReview());
  }, []);

  return (
    <div className="main-content">
      <section className="section">
        <BannerSlider title="Bookings" />

        <div className="section-body p-5">
          <div className="row mt-4">
            {currentData ? (
              currentData.map((review) => (
                <div key={review.id} className="col-12">
                  <div className="card booking_card">
                    <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
                      <div className="booking_detail">
                        <h4>
                          Review ID:
                          {' '}
                          {review.id}
                        </h4>
                        <p>
                          Rating:
                          {' '}
                          {review.rating}
                        </p>
                        <p>
                          Review:
                          {' '}
                          {review.review}
                        </p>
                        <p>
                          Review Time:
                          {' '}
                          {review.reviewTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No reviews available.</p>
            )}

            <Pagination
              totalItems={bookings?.length}
              itemsPerPage={itemsPerPage}
              onPageChange={handlePageChange}
              currentPage={currentPage}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProviderReviewPage;
