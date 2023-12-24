import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  actionCreateBooking, actionCreateBookingCalc, actionGetCustomerProfile, actionGetProviderProfile, actionGetServiceById, actionSetSelectedWorks,
} from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';
import PaymentMethods from './PaymentMethods/PaymentMethods';

import { determineUserRole, formatPriceWithCommas } from 'utils';

function CheckoutPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedWorks = useSelector((state) => state.Booking.works);
  const customerProfile = useSelector((state) => state.Customer.customer);
  const servicesDetails = useSelector((state) => state.Services.serviceDetails);
  const finalPrice = useSelector((state) => state.Booking.finalPrice);
  const bookingDetail = useSelector((state) => state.Booking.bookingDetail);
  const providerProfile = useSelector((state) => state.Provider.provider);

  const [selectedMethod, setSelectedMethod] = useState('cash');
  const [customerNote, setCustomerNote] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [isCreatedBooking, setIsCreatedBooking] = useState(false);

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
  };

  const handleBooking = async () => {
    dispatch(actionCreateBooking({
      address: customerAddress,
      note: customerNote,
      bookingItems: selectedWorks,
      paymentMethod: selectedMethod,
    }));

    setIsCreatedBooking(true);
  };

  const callbackLoginSuccess = useCallback(() => {
    navigate('/login');
  }, [navigate]);

  useEffect(() => {
    const userRole = determineUserRole();

    if (userRole === 'ROLE_CUSTOMER') {
      dispatch(actionGetCustomerProfile({ callback: callbackLoginSuccess }));
    } else if (userRole === 'ROLE_PROVIDER') {
      dispatch(actionGetProviderProfile());
    }

    dispatch(actionGetServiceById({ id }));
  }, []);

  useEffect(() => {
    const savedSelectedWorks = JSON.parse(sessionStorage.getItem('selectedWorks')) || [];
    const savedTotalPrice = JSON.parse(sessionStorage.getItem('totalPrice')) || 0;
    const savedAddress = JSON.parse(sessionStorage.getItem('address')) || {};
    const savedNote = JSON.parse(sessionStorage.getItem('note')) || '';

    const savedAddressWithoutId = `${savedAddress?.number || ''} ${savedAddress?.street || ''}, ${savedAddress?.ward || ''}, ${savedAddress?.district || ''}, ${savedAddress?.city || ''}`;
    const customerProfileAddressWithoutId = `${customerProfile?.addresses[0]?.number || ''} ${customerProfile?.addresses[0]?.street || ''}, ${customerProfile?.addresses[0]?.ward || ''}, ${customerProfile?.addresses[0]?.district || ''}, ${customerProfile?.addresses[0]?.city || ''}`;
    const providerProfileAddressWithoutId = `${providerProfile?.addresses[0]?.number || ''} ${providerProfile?.addresses[0]?.street || ''}, ${providerProfile?.addresses[0]?.ward || ''}, ${providerProfile?.addresses[0]?.district || ''}, ${providerProfile?.addresses[0]?.city || ''}`;

    setCustomerAddress(savedAddressWithoutId || customerProfileAddressWithoutId || providerProfileAddressWithoutId);
    setCustomerNote(savedNote);

    dispatch(actionSetSelectedWorks({
      selectedWorks: savedSelectedWorks,
      totalPrice: savedTotalPrice,
    }));
  }, []);

  useEffect(() => {
    if (bookingDetail && bookingDetail.id && isCreatedBooking) {
      navigate(`/booking/detail/${bookingDetail.id}`);
    }
  }, [bookingDetail, navigate, isCreatedBooking]);

  useEffect(() => {
    if (customerAddress && selectedWorks) {
      dispatch(actionCreateBookingCalc({
        address: customerAddress,
        note: customerNote,
        bookingItems: selectedWorks,
        paymentMethod: selectedMethod || 'cash',
      }));
    }
  }, [selectedMethod, customerProfile]);

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
                    {customerProfile && `${customerProfile?.firstName || ''} ${customerProfile?.lastName || ''}`}
                    {providerProfile && `${providerProfile?.firstName || ''} ${providerProfile?.lastName || ''}`}
                  </p>
                  <p>
                    <span>Email:</span>
                    {' '}
                    {customerProfile?.email || ''}
                    {providerProfile?.email || ''}
                  </p>
                  <p>
                    <span>Phone:</span>
                    {' '}
                    {customerProfile?.phone || ''}
                    {providerProfile?.phone || ''}
                  </p>
                  <p>
                    <span>Address:</span>
                    {' '}
                    {customerAddress}
                  </p>
                  <p>
                    <span>Booking Note:</span>
                    {' '}
                    {customerNote || 'Not provided'}
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
                        {formatPriceWithCommas(finalPrice.subTotal || 0) }
                        đ
                      </span>
                    </p>

                    <p>
                      Moving Fee
                      {' '}
                      <span>
                        {formatPriceWithCommas(finalPrice.movingFee || 0) }
                        đ
                      </span>
                    </p>

                    <h5>
                      Total
                      {' '}
                      <span>
                        {formatPriceWithCommas(finalPrice.totalPrice || 0)}
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
