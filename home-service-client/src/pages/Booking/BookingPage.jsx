import React, { useState, useEffect, useCallback } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { v4 as uuidv4 } from 'uuid';

import {
  actionGetCustomerProfile, actionGetProviderProfile, actionGetServiceById, actionSetSelectedWorks,
} from 'store/actions';

import BannerSlider from 'components/BannerSlider/BannerSlider';

import { determineUserRole, formatPriceWithCommas } from 'utils';

function BookingPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedWorks = useSelector((state) => state.Booking.works);
  const totalPrice = useSelector((state) => state.Booking.totalPrice);
  const customerProfile = useSelector((state) => state.Customer.customer);
  const providerProfile = useSelector((state) => state.Provider.provider);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: {
      number: '',
      street: '',
      ward: '',
      district: '',
      city: '',
    },
    note: '',
  });

  const handleAddressInputChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      address: {
        ...prevFormData.address,
        [field]: value,
      },
    }));
  };

  const handleNoteChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      note: event.target.value,
    }));
  };

  const handleSave = () => {
    const addressChanged = JSON.stringify(formData.address)
    !== JSON.stringify(customerProfile?.addresses[0]) || JSON.stringify(formData.address)
    !== JSON.stringify(providerProfile?.addresses[0]);
    const noteChanged = formData.note !== customerProfile?.note || formData.note !== providerProfile?.note;

    if (addressChanged || noteChanged) {
      sessionStorage.setItem('address', JSON.stringify(formData.address));
      sessionStorage.setItem('note', JSON.stringify(formData.note));
    }
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
  }, [id]);

  useEffect(() => {
    if (customerProfile) {
      setFormData((prevData) => ({
        ...prevData,
        name: `${customerProfile.firstName || ''} ${customerProfile.lastName || ''}`,
        email: customerProfile.email || '',
        phone: customerProfile.phone || '',
        address: customerProfile.addresses[0] || {
          number: '',
          street: '',
          ward: '',
          district: '',
          city: '',
        },
        orderNote: '',
      }));
    }

    if (providerProfile) {
      setFormData((prevData) => ({
        ...prevData,
        name: `${providerProfile.firstName || ''} ${providerProfile.lastName || ''}`,
        email: providerProfile.email || '',
        phone: providerProfile.phone || '',
        address: providerProfile.addresses[0] || {
          number: '',
          street: '',
          ward: '',
          district: '',
          city: '',
        },
        orderNote: '',
      }));
    }
  }, [customerProfile, providerProfile]);

  useEffect(() => {
    const savedSelectedWorks = JSON.parse(sessionStorage.getItem('selectedWorks')) || [];
    const savedTotalPrice = JSON.parse(sessionStorage.getItem('totalPrice')) || 0;

    dispatch(actionSetSelectedWorks({
      selectedWorks: savedSelectedWorks,
      totalPrice: savedTotalPrice,
    }));
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
                  <form id="customer_info_form">
                    <h3>Booking Information</h3>
                    <div className="row">
                      <div className="col-xl-6">
                        <fieldset>
                          <legend>Name</legend>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            readOnly
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
                            readOnly
                          />
                        </fieldset>
                      </div>

                      <div className="col-xl-6">
                        <fieldset>
                          <legend>Phone</legend>
                          <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            readOnly
                          />
                        </fieldset>
                      </div>

                      <div className="col-xl-12">
                        <fieldset className="p-2">
                          <legend>Your Address*</legend>
                          <div>
                            <label>Number*:</label>
                            <input
                              type="text"
                              name="number"
                              value={formData.address.number}
                              onChange={(e) => handleAddressInputChange('number', e.target.value)}
                            />
                          </div>
                          <div>
                            <label>Street*:</label>
                            <input
                              type="text"
                              name="street"
                              value={formData.address.street}
                              onChange={(e) => handleAddressInputChange('street', e.target.value)}
                            />
                          </div>
                          <div>
                            <label>Ward*:</label>
                            <input
                              type="text"
                              name="ward"
                              value={formData.address.ward}
                              onChange={(e) => handleAddressInputChange('ward', e.target.value)}
                            />
                          </div>
                          <div>
                            <label>District*:</label>
                            <input
                              type="text"
                              name="district"
                              value={formData.address.district}
                              onChange={(e) => handleAddressInputChange('district', e.target.value)}
                            />
                          </div>
                          <div>
                            <label>City*:</label>
                            <input
                              type="text"
                              name="city"
                              value={formData.address.city}
                              onChange={(e) => handleAddressInputChange('city', e.target.value)}
                            />
                          </div>
                        </fieldset>
                      </div>

                      <div className="col-xl-12">
                        <fieldset>
                          <legend>Booking Note</legend>
                          <textarea
                            rows="5"
                            name="note"
                            value={formData.note}
                            onChange={handleNoteChange}
                            placeholder="Write an booking note"
                          />
                        </fieldset>
                      </div>
                    </div>
                    <Link
                      to={`/checkout/${id}`}
                      id="customer_info_btn"
                      className="common_btn mt-2"
                      onClick={handleSave}
                    >
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
                      <li key={uuidv4()}>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BookingPage;
