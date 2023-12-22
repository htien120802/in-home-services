import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetCustomerProfile, actionGetServiceById } from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';

import { formatPriceWithCommas } from 'utils';

function BookingPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const selectedWorks = useSelector((state) => state.Booking.works);
  const totalPrice = useSelector((state) => state.Booking.totalPrice);
  const customerProfile = useSelector((state) => state.Customer.customer);
  const servicesDetails = useSelector((state) => state.Services.serviceDetails);

  console.log(selectedWorks);

  const [selectedSchedule, setSelectedSchedule] = useState('');

  const handleScheduleSelect = (selectedValue) => {
    setSelectedSchedule(selectedValue);
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    orderNote: '',
  });

  const handleInputChange = (e) => {
    const {
      name, value, type, checked,
    } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const generateTimeOptions = (start, end) => {
    const timeOptions = [];
    let currentTime = start;

    while (currentTime <= end) {
      timeOptions.push(
        <option key={currentTime} value={currentTime}>
          {currentTime}
        </option>,
      );

      currentTime = addTime(currentTime, 60);
    }

    return timeOptions;
  };

  const addTime = (time, minutes) => {
    const [hours, mins] = time.split(':').map(Number);
    const newTime = new Date(0, 0, 0, hours, mins + minutes);
    const newHours = newTime.getHours();
    const newMinutes = newTime.getMinutes();

    return `${String(newHours).padStart(2, '0')}:${String(newMinutes).padStart(2, '0')}:00`;
  };

  useEffect(() => {
    dispatch(actionGetCustomerProfile());
    dispatch(actionGetServiceById({ id }));
  }, []);

  useEffect(() => {
    if (customerProfile) {
      setFormData((prevData) => ({
        ...prevData,
        name: `${customerProfile.firstName || ''} ${customerProfile.lastName || ''}`,
        email: customerProfile.email || '',
        phone: customerProfile.phone || '',
        address: `${customerProfile.addresses[0]?.number || ''} ${customerProfile.addresses[0]?.street || ''}, ${customerProfile.addresses[0]?.ward || ''}, ${customerProfile.addresses[0]?.district || ''}, ${customerProfile.addresses[0]?.city || ''}`,
        orderNote: '',
      }));
    }
  }, [customerProfile]);

  return (
    <>
      <BannerSlider title="Booking" />

      <section className="wsus__booking_info mt_100 xs_mt_70 mb_100 xs_mb_70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="wsus__booking_area">
                <ul className="booking_bar d-flex flex-wrap">
                  <li className="active">
                    1
                    <span>Service</span>
                  </li>
                  <li className="active">
                    2
                    <span>Information</span>
                  </li>
                  <li>
                    3
                    <span>Confirmation</span>
                  </li>
                </ul>
                <div className="wsus__review_input mt_30 p-0 border-0">
                  <form id="customer_info_form" onSubmit={handleSubmit}>
                    <h3>Booking Information</h3>
                    <div className="row">
                      <div className="col-xl-6">
                        <fieldset>
                          <legend>Name*</legend>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                          />
                        </fieldset>
                      </div>

                      <div className="col-xl-6">
                        <fieldset>
                          <legend>Email</legend>
                          <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                          />
                        </fieldset>
                      </div>

                      <div className="col-xl-6">
                        <fieldset>
                          <legend>Phone*</legend>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                          />
                        </fieldset>
                      </div>

                      <div className="col-xl-12">
                        <fieldset>
                          <legend>Your Address*</legend>
                          <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                          />
                        </fieldset>
                      </div>

                      <div className="col-xl-12">
                        <fieldset>
                          <legend>Order Note</legend>
                          <textarea
                            rows="5"
                            name="orderNote"
                            value={formData.orderNote}
                            onChange={handleInputChange}
                            placeholder="Write an order note"
                          />
                        </fieldset>
                      </div>

                      <input type="hidden" name="extras" value="YOUR_EXTRAS_DATA" />
                    </div>
                    <Link to={`/checkout/${id}`} id="customer_info_btn" className="common_btn">
                      Next
                    </Link>
                  </form>
                </div>
              </div>

              <ul className="wsus__booking_button_area d-flex">
                <li>
                  <Link to={`/services/${id}`} className="common_btn">
                    Previous
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="wsus__sidebar" id="sticky_sidebar">
                <div className="wsus__booking_summery m-0">
                  <h3>Booking Summery</h3>
                  <ul>
                    {selectedWorks.map((selectedWork) => (
                      <li key={selectedWork.description}>
                        {selectedWork.work.description}
                        :
                        {' '}
                        {selectedWork.quantity !== undefined ? selectedWork.quantity : 'N/A'}
                      </li>
                    ))}
                  </ul>
                  <div className="wsus__booking_cost">
                    <p>
                      Package Fee
                      {' '}
                      <span>
                        {formatPriceWithCommas(totalPrice || 0)}
                        đ
                      </span>
                    </p>
                  </div>
                </div>

                <div className="wsus__booking_pic_up mt_25">
                  <h3>Select Schedule</h3>
                  <select id="schedule_box" onChange={(e) => handleScheduleSelect(e.target.value)}>
                    <option value={selectedSchedule}>Select</option>
                    {generateTimeOptions(servicesDetails?.openTime, servicesDetails?.closeTime)}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingPage;
