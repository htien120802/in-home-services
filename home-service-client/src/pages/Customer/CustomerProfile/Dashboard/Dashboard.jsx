import React, { useState } from 'react';

import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faBox, faClipboardCheck } from '@fortawesome/free-solid-svg-icons';
import EditProfileModal from './EditProfileModal/EditProfileModal';

function Dashboard({ customerState, bookingState }) {
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  const closeModal = () => {
    setEditModalOpen(false);
  };

  const calculateOrders = (status) => bookingState.bookings.content?.filter((booking) => booking.status === status).length;

  return (
    <div
      className="tab-pane fade show active"
      id="v-pills-home"
      role="tabpanel"
      aria-labelledby="v-pills-home-tab"
    >
      <div className="wsus_dashboard_body">
        <p>
          Hello,
          {' '}
          {customerState?.customer?.firstName}
        </p>
        <h3>Welcome to your Profile</h3>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div
              className="wsus__dashboard_info"
              style={{ background: "url('/assets/images/dash_ifo_bg.jpg')" }}
            >
              <span><FontAwesomeIcon icon={faShoppingBag} /></span>
              <h5>Booking Active</h5>
              <h2>
                {calculateOrders('BOOKED')
                + calculateOrders('ACCEPTED')
                + calculateOrders('COMING')
                + calculateOrders('DOING')}
              </h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="wsus__dashboard_info"
              style={{ background: "url('/assets/images/dash_ifo_bg.jpg')" }}
            >
              <span><FontAwesomeIcon icon={faBox} /></span>
              <h5>Booking Completed</h5>
              <h2>{calculateOrders('DONE')}</h2>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div
              className="wsus__dashboard_info"
              style={{ background: "url('/assets/images/dash_ifo_bg.jpg')" }}
            >
              <span><FontAwesomeIcon icon={faClipboardCheck} /></span>
              <h5>Total Booking</h5>
              <h2>{bookingState.bookings?.content?.length}</h2>
            </div>
          </div>
        </div>

        <div className="wsus_dash_personal_info">
          <div
            className="nav nav-pills d-flex flex-wrap justify-content-between align-items-center"
            id="pills-tab"
            role="tablist"
          >
            <h4>Personal Information</h4>
            <button
              id="toggleProfileSection"
              className="nav-link"
              type="button"
              role="tab"
              onClick={() => setEditModalOpen(true)}
            >
              edit
            </button>
          </div>
          <div className="tab-content">
            <div id="profile_section">
              <p>
                <span>Name:</span>
                {' '}
                {`${customerState?.customer?.lastName} ${customerState?.customer?.firstName}`}
              </p>
              <p>
                <span>Email:</span>
                {' '}
                {customerState?.customer?.email}
              </p>
              <p>
                <span>Phone:</span>
                {' '}
                {customerState?.customer?.phone || (
                  'No phone information available'
                )}
              </p>
              <p>
                <span>Addresses:</span>
                {' '}
                {customerState?.customer?.addresses.map((address, index) => (
                  <React.Fragment key={address.id}>
                    {index > 0 && <br />}
                    {' '}
                    {`${address.number} ${address.street}, ${address.ward}, ${address.district}, ${address.city}`}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <EditProfileModal
              customerState={customerState}
              isOpen={isEditModalOpen}
              onClose={closeModal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

Dashboard.propTypes = {
  customerState: PropTypes.shape({
    customer: PropTypes.shape({
      firstName: PropTypes.string,
      lastName: PropTypes.string,
      email: PropTypes.string,
      phone: PropTypes.string,
      addresses: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          number: PropTypes.string,
          street: PropTypes.string,
          ward: PropTypes.string,
          district: PropTypes.string,
          city: PropTypes.string,
        }),
      ),
    }),
  }).isRequired,

  bookingState: PropTypes.shape({
    loading: PropTypes.bool,
    bookings: PropTypes.shape({
      content: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string,
          customer: PropTypes.shape({
            email: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            phone: PropTypes.string,
            addresses: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string,
                number: PropTypes.string,
                street: PropTypes.string,
                ward: PropTypes.string,
                district: PropTypes.string,
                city: PropTypes.string,
              }),
            ),
            avatar: PropTypes.string,
          }),
          provider: PropTypes.shape({
            email: PropTypes.string,
            firstName: PropTypes.string,
            lastName: PropTypes.string,
            phone: PropTypes.string,
            addresses: PropTypes.arrayOf(
              PropTypes.shape({
                id: PropTypes.string,
                number: PropTypes.string,
                street: PropTypes.string,
                ward: PropTypes.string,
                district: PropTypes.string,
                city: PropTypes.string,
              }),
            ),
            avatar: PropTypes.string,
          }),
          service: PropTypes.shape({
            id: PropTypes.string,
            name: PropTypes.string,
            avgRating: PropTypes.number,
            distance: PropTypes.number,
            category: PropTypes.shape({
              id: PropTypes.string,
              categoryName: PropTypes.string,
              slug: PropTypes.string,
              thumbnail: PropTypes.string,
            }),
          }),
          bookingItems: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              work: PropTypes.shape({
                id: PropTypes.string,
                description: PropTypes.string,
                unit: PropTypes.string,
                pricePerUnit: PropTypes.number,
              }),
              quantity: PropTypes.number,
            }),
          ),
          movingFee: PropTypes.number,
          subTotal: PropTypes.number,
          totalPrice: PropTypes.number,
          time: PropTypes.string,
          date: PropTypes.string,
          arriveTime: PropTypes.string,
          status: PropTypes.string,
          payment: PropTypes.shape({
            id: PropTypes.string,
            method: PropTypes.string,
            paymentStatus: PropTypes.string,
          }),
        }),
      ),
      empty: PropTypes.bool,
      first: PropTypes.bool,
      last: PropTypes.bool,
      number: PropTypes.number,
      numberOfElements: PropTypes.number,
      pageable: PropTypes.shape({
        pageNumber: PropTypes.number,
        pageSize: PropTypes.number,
        sort: PropTypes.shape({
          empty: PropTypes.bool,
          sorted: PropTypes.bool,
          unsorted: PropTypes.bool,
        }),
        offset: PropTypes.number,
        paged: PropTypes.bool,
        unpaged: PropTypes.bool,
      }),
      size: PropTypes.number,
      sort: PropTypes.shape({
        empty: PropTypes.bool,
        sorted: PropTypes.bool,
        unsorted: PropTypes.bool,
      }),
      totalElements: PropTypes.number,
      totalPages: PropTypes.number,
    }),
  }),
};

Dashboard.defaultProps = {
  bookingState: {
    loading: false,
    bookings: {
      content: [],
      empty: false,
      first: true,
      last: true,
      number: 0,
      numberOfElements: 0,
      pageable: {
        pageNumber: 0,
        pageSize: 10,
        sort: { empty: false, sorted: true, unsorted: false },
        offset: 0,
        paged: true,
        unpaged: false,
      },
      size: 10,
      sort: { empty: false, sorted: true, unsorted: false },
      totalElements: 0,
      totalPages: 0,
    },
  },
};

export default Dashboard;
