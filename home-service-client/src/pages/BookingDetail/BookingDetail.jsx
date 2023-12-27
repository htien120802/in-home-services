import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  actionCustomerCancelBooking, actionGetCustomerBooking, actionGetCustomerProfile, actionGetProviderBooking, actionGetProviderProfile, actionPostCustomerBookingReview, actionProviderCancelBooking,
} from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import ServerErrorPage from 'pages/Error500/Error500Page';

import { determineUserRole, formatPriceWithCommas } from 'utils';
import ReasonModal from 'pages/Customer/CustomerProfile/Order/OrderDetail/ReasonModal/ReasonModal';
import LetAReviewModal from './LetAReviewModal/LetAReviewModal';

function BookingDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const bookingDetail = useSelector((state) => state.Booking.bookingDetail);

  const [error, setError] = useState(false);
  const [role, setRole] = useState(null);
  const [isReasonModalOpen, setIsReasonModalOpen] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [cancellationReason, setCancellationReason] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleCloseReasonModal = () => {
    setIsReasonModalOpen(false);
  };

  const handleReasonChange = (event) => {
    setCancellationReason(event.target.value);
  };

  const handleOpenReviewModal = () => {
    setIsReviewModalOpen(true);
  };

  const handleCloseReviewModal = () => {
    setIsReviewModalOpen(false);
  };

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleCancel = () => {
    const userRole = determineUserRole();

    if (userRole === 'ROLE_CUSTOMER') {
      dispatch(actionCustomerCancelBooking({ bookingId: bookingDetail.id, reason: cancellationReason }));
    } else if (userRole === 'ROLE_PROVIDER') {
      dispatch(actionProviderCancelBooking({ bookingId: bookingDetail.id, reason: cancellationReason }));
    }

    setIsReasonModalOpen(false);
  };

  const handleSubmitReview = () => {
    dispatch(actionPostCustomerBookingReview({ bookingId: bookingDetail.id, review, rating }));
    setIsReviewModalOpen(false);
  };

  const callbackLoginSuccess = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  const callbackGetBookingDetailFailed = useCallback(() => {
    setError(true);
  }, []);

  useEffect(() => {
    const userRole = determineUserRole();

    if (userRole === 'ROLE_CUSTOMER') {
      setRole(userRole);
      dispatch(actionGetCustomerProfile({ callback: callbackLoginSuccess }));
      dispatch(actionGetCustomerBooking({ bookingId: id, callback: callbackGetBookingDetailFailed }));
    } else if (userRole === 'ROLE_PROVIDER') {
      setRole(userRole);
      dispatch(actionGetProviderProfile());
      dispatch(actionGetProviderBooking({ bookingId: id, callback: callbackGetBookingDetailFailed }));
    }
  }, [id, dispatch]);

  if (error) {
    return <ServerErrorPage />;
  }

  return (
    <>
      <BannerSlider title="Booking Detail" />

      <section className="mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Booking Information</h3>
                </div>
                <div className="card-body">
                  {bookingDetail ? (
                    <>
                      <div className="mb-3">
                        <h4 className="mt-0">Customer Info</h4>

                        <p>
                          <span>Booking ID:</span>
                          {' '}
                          {bookingDetail.id}
                        </p>
                        <p>
                          <span>Customer First Name:</span>
                          {' '}
                          {bookingDetail.customer?.firstName}
                        </p>
                        <p>
                          <span>Customer Last Name:</span>
                          {' '}
                          {bookingDetail.customer?.lastName}
                        </p>
                        <p>
                          <span>Email:</span>
                          {' '}
                          {bookingDetail.customer?.email}
                        </p>
                        <p>
                          <span>Phone:</span>
                          {' '}
                          {bookingDetail.customer?.phone || 'Not provided'}
                        </p>
                        <p>
                          <span>Address:</span>
                          {' '}
                          {bookingDetail.customer?.addresses.map((address) => (
                            <div key={address.id}>
                              {[
                                `Number: ${address.number}`,
                                `Street: ${address.street}`,
                                `Ward: ${address.ward}`,
                                `District: ${address.district}`,
                                `City: ${address.city}`,
                              ].join(', ')}
                            </div>
                          ))}
                        </p>
                        <p>
                          <span>Note:</span>
                          {' '}
                          {bookingDetail.customer?.note || 'Not provided'}
                        </p>
                      </div>

                      <div className="mb-3">
                        <h4 className="mt-0">Payment Info</h4>

                        <p>
                          <span>Payment Method:</span>
                          {' '}
                          {bookingDetail.payment?.method}
                        </p>
                        <p>
                          <span>Payment Status:</span>
                          {' '}
                          {bookingDetail.payment?.paymentStatus}
                        </p>
                        <p>
                          <span>Time:</span>
                          {' '}
                          {bookingDetail.time}
                        </p>
                        <p>
                          <span>Date:</span>
                          {' '}
                          {bookingDetail.date}
                        </p>

                        <p>
                          <span>Status:</span>
                          {' '}
                          {bookingDetail.status}
                        </p>

                        {bookingDetail.status === 'BOOKED' && (
                        <button
                          type="button"
                          className="btn"
                          style={{ color: 'orange' }}
                          onClick={() => setIsReasonModalOpen(true)}
                        >
                          Cancel Order
                        </button>
                        ) }
                      </div>

                      <div className="mb-3">
                        <h4 className="mt-0">Review</h4>

                        {bookingDetail.review ? (
                          <>
                            <p>
                              <span>Rating:</span>
                              {' '}
                              {bookingDetail.rating}
                            </p>
                            <p>
                              <span>Review:</span>
                              {' '}
                              {bookingDetail.review}
                            </p>
                            <p>
                              <span>Time:</span>
                              {' '}
                              {bookingDetail.reviewTime}
                            </p>
                          </>
                        ) : (
                          <div>
                            {bookingDetail.status === 'DONE' && role === 'ROLE_CUSTOMER' && (
                            <button
                              type="button"
                              className="btn btn-primary ms-2"
                              onClick={handleOpenReviewModal}
                            >
                              Leave a Review
                            </button>
                            )}
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>

              <Link to="/" className="btn btn-secondary mt-3 mb-3">
                Back To Home
              </Link>
            </div>
            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Order Summary</h3>
                </div>
                <div className="card-body">
                  {bookingDetail ? (
                    <>
                      <div className="mb-3">
                        <h4 className="mt-0">Service</h4>
                        <p>
                          {bookingDetail?.service?.name}
                        </p>
                      </div>

                      <div className="mb-3">
                        <h4 className="mt-0">Booking Items</h4>
                        <ul>
                          {bookingDetail.bookingItems.map((item) => (
                            <li key={item.id} className="ms-4">
                              {item.work.description}
                              {' '}
                              - Quantity:
                              {' '}
                              {item.quantity}
                              {' '}
                              {item.work.unit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mb-3">
                        <h4>Moving Fee</h4>
                        <p>
                          {formatPriceWithCommas(bookingDetail.movingFee || 0)}
                          đ
                        </p>
                      </div>
                      <div className="mb-3">
                        <h4>Price</h4>
                        <p>
                          {formatPriceWithCommas(bookingDetail.subTotal || 0)}
                          đ
                        </p>
                      </div>
                      <div>
                        <h4>Total Price</h4>
                        <p>
                          {formatPriceWithCommas(bookingDetail.totalPrice || 0)}
                          đ
                        </p>
                      </div>
                    </>
                  ) : (
                    <p>Loading...</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <ReasonModal
          isOpen={isReasonModalOpen}
          onClose={handleCloseReasonModal}
          handleCancel={handleCancel}
          handleReasonChange={handleReasonChange}
          cancellationReason={cancellationReason}
        />
        <LetAReviewModal
          isOpen={isReviewModalOpen}
          onClose={handleCloseReviewModal}
          handleReviewChange={handleReviewChange}
          handleRatingChange={handleRatingChange}
          review={review}
          rating={rating}
          handleSubmit={handleSubmitReview}
        />
      </section>
    </>
  );
}

export default BookingDetailPage;
