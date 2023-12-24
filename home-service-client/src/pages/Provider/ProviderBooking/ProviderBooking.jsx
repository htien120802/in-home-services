import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import { actionGetProviderBookings, actionUpdateBookingStatus } from 'store/actions';
import { Link } from 'react-router-dom';
import Pagination from 'pages/Customer/CustomerProfile/Order/Pagination/Pagination';

function ProviderBooking() {
  const dispatch = useDispatch();
  const bookings = useSelector((state) => state.Booking.bookings);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = bookings.content?.slice(indexOfFirstItem, indexOfLastItem);

  const updateBookingStatus = (bookingId) => {
    dispatch(actionUpdateBookingStatus({ bookingId }));
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    dispatch(actionGetProviderBookings());
  }, []);

  return (
    <div className="main-content">
      <section className="section">
        <BannerSlider title="Bookings" />

        <div className="section-body p-5">
          <div className="row mt-4">
            {currentData ? (
              currentData.map((booking) => (
                <div key={booking.id} className="col-12">
                  <div className="card booking_card">
                    <div className="card-body d-flex flex-wrap justify-content-between align-items-center">
                      <div className="booking_detail">
                        <h4>
                          Booking ID:
                          {' '}
                          {booking.id}
                        </h4>
                        <p>
                          Customer:
                          {' '}
                          {booking.customer.firstName}
                          {' '}
                          {booking.customer.lastName}
                        </p>
                        <p>
                          Service:
                          {' '}
                          {booking.service.name}
                        </p>
                        <p>
                          Status:
                          {' '}
                          {booking.status}
                        </p>

                        <Link
                          to={`/booking/detail/${booking.id}`}
                          type="button"
                          className="btn btn-primary btn-sm"
                        >
                          View Details
                        </Link>

                        {!booking.status.includes('CANCEL') && booking.status !== 'DONE' && (
                        <button
                          type="button"
                          className="btn btn-danger btn-sm ml-2"
                          onClick={() => updateBookingStatus(booking.id)}
                        >
                          Update Status
                        </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center text-danger">
                <h4>No bookings found!</h4>
              </div>
            )}

            <Pagination
              totalItems={bookings?.content?.length}
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

export default ProviderBooking;
