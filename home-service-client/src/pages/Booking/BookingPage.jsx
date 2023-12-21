import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { actionGetServiceById } from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';

import { formatPriceWithCommas } from 'utils';

function BookingPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.Services);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    postCode: '',
    address: '',
    orderNote: '',
    agreeWith: false,
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

  useEffect(() => {
    dispatch(actionGetServiceById({ id }));
  }, []);

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

                      <div className="col-xl-6">
                        <fieldset>
                          <legend>Post Code</legend>
                          <input
                            type="text"
                            name="postCode"
                            value={formData.postCode}
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

                      <div className="col-xl-12">
                        <div className="wsus__login_check d-flex flex-wrap mt_20">
                          <div className="form-check">
                            <input
                              required
                              className=""
                              type="checkbox"
                              name="agreeWith"
                              id="flexCheckDefault"
                              checked={formData.agreeWith}
                              onChange={handleInputChange}
                            />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                              I agree with
                              {' '}
                              <a href="YOUR_TERMS_AND_CONDITIONS_LINK">Terms and Conditions</a>
                            </label>
                          </div>
                        </div>
                      </div>

                      <input type="hidden" name="extras" value="YOUR_EXTRAS_DATA" />
                    </div>
                    <button type="submit" id="customer_info_btn" className="common_btn">
                      Next
                    </button>
                  </form>
                </div>
              </div>

              <ul className="wsus__booking_button_area d-flex">
                <li>
                  <a href="YOUR_PREVIOUS_LINK" className="common_btn">
                    Previous
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <div className="wsus__sidebar" id="sticky_sidebar">
                <div className="wsus__booking_summery m-0">
                  <h3>Booking Summery</h3>
                  <ul>
                    {data.serviceDetails
                    && data.serviceDetails.works
                    && data.serviceDetails.works.map((work) => (
                      <li key={work.id}>{work.description}</li>
                    ))}
                  </ul>
                  <div className="wsus__booking_cost">
                    <p>
                      Package Fee
                      {' '}
                      <span>
                        {data.serviceDetails
                        && data.serviceDetails.works
                        && formatPriceWithCommas(data.serviceDetails.works.reduce((total, work) => total + work.pricePerUnit, 0))}
                        đ
                      </span>
                    </p>
                  </div>
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
