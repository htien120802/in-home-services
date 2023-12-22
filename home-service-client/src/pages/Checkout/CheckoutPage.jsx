import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionCreateBooking, actionGetCustomerProfile, actionGetServiceById } from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import PaymentMethods from './PaymentMethods/PaymentMethods';

import { formatPriceWithCommas } from 'utils';

function CheckoutPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedWorks = useSelector((state) => state.Booking.works);
  const totalPrice = useSelector((state) => state.Booking.totalPrice);
  const customerProfile = useSelector((state) => state.Customer.customer);
  const servicesDetails = useSelector((state) => state.Services.serviceDetails);

  const [selectedMethod, setSelectedMethod] = useState(null);

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
  };

  const handleBooking = () => {
    dispatch(actionCreateBooking({
      bookingItem: selectedWorks,
      paymentMethoad: selectedMethod,
    }));
  };

  useEffect(() => {
    dispatch(actionGetCustomerProfile());
    dispatch(actionGetServiceById({ id }));
  }, []);

  return (
    <>
      <BannerSlider title="Payment" />

      <section className="wsus__booking_confirm mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8">
              <div className="wsus__booking_area">
                <ul className="booking_bar d-flex flex-wrap">
                  <li className="active">
                    1
                    {' '}
                    <span>Service</span>
                  </li>
                  <li className="active">
                    2
                    {' '}
                    <span>Information</span>
                  </li>
                  <li className="active">
                    3
                    {' '}
                    <span>Confirmation</span>
                  </li>
                </ul>
                <div className="wsus__booking_img">
                  <img src={servicesDetails?.thumbnail} alt="booking images" className="img-fluid w-100" />
                </div>
                <div className="wsus__service_booking">
                  <h3>Booking Information</h3>
                  <p>
                    <span>Name:</span>
                    {' '}
                    {`${customerProfile?.firstName || ''} ${customerProfile?.lastName || ''}`}
                  </p>
                  <p>
                    <span>Email:</span>
                    {' '}
                    {customerProfile?.email || ''}
                  </p>
                  <p>
                    <span>Phone:</span>
                    {' '}
                    {customerProfile?.phone || ''}
                  </p>
                  <p>
                    <span>Address:</span>
                    {' '}
                    {`${customerProfile?.addresses[0]?.number || ''} ${customerProfile?.addresses[0]?.street || ''}, ${customerProfile?.addresses[0]?.ward || ''}, ${customerProfile?.addresses[0]?.district || ''}, ${customerProfile?.addresses[0]?.city || ''}`}
                  </p>
                  <p>
                    <span>Date:</span>
                    {' '}
                    extra_services date
                  </p>
                  <p>
                    <span>Order Note:</span>
                    {' '}
                    customer order_note
                  </p>
                </div>
              </div>

              <PaymentMethods selectedMethod={selectedMethod} handleSelectMethod={handleSelectMethod} />
            </div>

            <div className="col-xl-4 col-lg-4">
              <div className="wsus__sidebar" id="sticky_sidebar">
                <div className="wsus__booking_summery m-0">
                  <h3>Booking Summery</h3>
                  <ul>
                    {selectedWorks.map((selectedWork) => (
                      <li key={selectedWork.description}>
                        {selectedWork.work.description}
                        :
                        {' '}
                        {selectedWork.quantity}
                      </li>
                    ))}
                  </ul>
                  <div className="wsus__booking_cost">
                    <p>
                      Package Fee
                      {' '}
                      <span>
                        {formatPriceWithCommas(totalPrice || 0) }
                        đ
                      </span>
                    </p>

                    <h5>
                      Total
                      {' '}
                      <span>
                        {formatPriceWithCommas(totalPrice || 0)}
                        đ
                      </span>
                    </h5>
                  </div>

                  <button
                    type="button"
                    className="btn btn-secondary mt_20 m-3"
                    onClick={handleBooking}
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>

            <ul className="wsus__booking_button_area d-flex">
              <li>
                <Link to={`/booking/${id}`} className="common_btn">
                  Previous
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

    </>
  );
}

export default CheckoutPage;
