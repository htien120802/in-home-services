import React from 'react';
import Modal from 'react-modal';

import PropTypes from 'prop-types';

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
    zIndex: 1000000,
  },
  content: {
    width: '50%',
    maxHeight: '80vh',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    padding: 0,
    border: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000001,
  },
};

function OrderDetail({ orderDetail, isOpen, onClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
    >
      <div className="wsus__review_input">
        <div>
          <div className="row">
            <div className="col-xl-12">
              <h2>Order Details</h2>
            </div>
            <div className="col-xl-6">
              <h3>Customer Information</h3>
              <p>
                Email:
                {' '}
                {orderDetail?.customer?.email}
              </p>
              <p>
                First Name:
                {' '}
                {orderDetail?.customer?.firstName}
              </p>
              <p>
                Last Name:
                {' '}
                {orderDetail?.customer?.lastName}
              </p>
              <p>
                Phone:
                {' '}
                {orderDetail?.customer?.phone || 'N/A'}
              </p>
              <h4>Address:</h4>
              {orderDetail?.customer?.addresses.map((address) => (
                <div key={address.id}>
                  <p>
                    Number:
                    {' '}
                    {address.number}
                  </p>
                  <p>
                    Street:
                    {' '}
                    {address.street}
                  </p>
                  <p>
                    Ward:
                    {' '}
                    {address.ward}
                  </p>
                  <p>
                    District:
                    {' '}
                    {address.district}
                  </p>
                  <p>
                    City:
                    {' '}
                    {address.city}
                  </p>
                </div>
              ))}
            </div>
            <div className="col-xl-6">
              <h3>Provider Information</h3>
              <p>
                Email:
                {' '}
                {orderDetail?.provider?.email}
              </p>
              <p>
                First Name:
                {' '}
                {orderDetail?.provider?.firstName}
              </p>
              <p>
                Last Name:
                {' '}
                {orderDetail?.provider?.lastName}
              </p>
              <p>
                Phone:
                {' '}
                {orderDetail?.provider?.phone}
              </p>
              <h4>Address:</h4>
              {orderDetail?.provider?.addresses.map((address) => (
                <div key={address.id}>
                  <p>
                    Number:
                    {' '}
                    {address.number}
                  </p>
                  <p>
                    Street:
                    {' '}
                    {address.street}
                  </p>
                  <p>
                    Ward:
                    {' '}
                    {address.ward}
                  </p>
                  <p>
                    District:
                    {' '}
                    {address.district}
                  </p>
                  <p>
                    City:
                    {' '}
                    {address.city}
                  </p>
                </div>
              ))}
              <img src={orderDetail?.provider?.avatar || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?s=200&d=mp'} alt="Provider Avatar" />
            </div>
            <div className="col-xl-12">
              <h3>Service Information</h3>
              <p>
                Service Name:
                {' '}
                {orderDetail?.service?.name}
              </p>
              <p>
                Service Rating:
                {' '}
                {orderDetail?.service?.avgRating}
              </p>
              <p>
                Service Category:
                {' '}
                {orderDetail?.service?.category?.categoryName}
              </p>
              <img src={orderDetail?.service?.category?.thumbnail} style={{ width: '100%' }} alt="Service Thumbnail" />
              <h4>Works:</h4>
              <ul>
                {orderDetail?.service?.works.map((work) => (
                  <li key={work.id}>
                    <p>
                      Description:
                      {' '}
                      {work.description}
                    </p>
                    <p>
                      Unit:
                      {' '}
                      {work.unit}
                    </p>
                    <p>
                      Price per Unit:
                      {' '}
                      {work.pricePerUnit}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-12">
              <h3>Booking Items</h3>
              <ul>
                {orderDetail?.bookingItems.map((bookingItem) => (
                  <li key={bookingItem.id}>
                    <p>
                      Work Description:
                      {' '}
                      {bookingItem.work.description}
                    </p>
                    <p>
                      Quantity:
                      {' '}
                      {bookingItem.quantity}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-xl-12">
              <h3>Payment Information</h3>
              <p>
                Payment Method:
                {' '}
                {orderDetail?.payment?.method}
              </p>
              <p>
                Payment Status:
                {' '}
                {orderDetail?.payment?.paymentStatus}
              </p>
            </div>
            <div className="col-xl-12">
              <h3>Additional Details</h3>
              <p>
                Moving Fee:
                {' '}
                {orderDetail?.movingFee}
              </p>
              <p>
                Total Price:
                {' '}
                {orderDetail?.totalPrice}
              </p>
              <p>
                Time:
                {' '}
                {orderDetail?.time}
              </p>
              <p>
                Date:
                {' '}
                {orderDetail?.date}
              </p>
              {orderDetail?.arriveTime && (
              <p>
                Arrive Time:
                {' '}
                {orderDetail?.arriveTime}
              </p>
              )}
              <p>
                Status:
                {' '}
                {orderDetail?.status}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

OrderDetail.propTypes = {
  orderDetail: PropTypes.shape({
    id: PropTypes.string.isRequired,
    customer: PropTypes.shape({
      email: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      phone: PropTypes.string,
      addresses: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
          street: PropTypes.string.isRequired,
          ward: PropTypes.string.isRequired,
          district: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
        }),
      ),
      avatar: PropTypes.string,
    }),
    provider: PropTypes.shape({
      email: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
      addresses: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          number: PropTypes.string.isRequired,
          street: PropTypes.string.isRequired,
          ward: PropTypes.string.isRequired,
          district: PropTypes.string.isRequired,
          city: PropTypes.string.isRequired,
        }),
      ),
      avatar: PropTypes.string.isRequired,
    }),
    service: PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avgRating: PropTypes.number.isRequired,
      distance: PropTypes.number,
      works: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          unit: PropTypes.string.isRequired,
          pricePerUnit: PropTypes.number.isRequired,
        }),
      ),
      category: PropTypes.shape({
        id: PropTypes.string.isRequired,
        categoryName: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
      }),
    }),
    bookingItems: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        work: PropTypes.shape({
          id: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
          unit: PropTypes.string.isRequired,
          pricePerUnit: PropTypes.number.isRequired,
        }),
        quantity: PropTypes.number.isRequired,
      }),
    ),
    movingFee: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    arriveTime: PropTypes.string,
    status: PropTypes.string.isRequired,
    payment: PropTypes.shape({
      id: PropTypes.string.isRequired,
      method: PropTypes.string.isRequired,
      paymentStatus: PropTypes.string.isRequired,
    }),
  }).isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default OrderDetail;
