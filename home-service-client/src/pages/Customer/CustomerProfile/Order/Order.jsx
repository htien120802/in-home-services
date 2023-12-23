import React, { useState } from 'react';

import PropTypes from 'prop-types';
import Pagination from './Pagination/Pagination';
import OrderDetail from './OrderDetail/OrderDetail';
import { formatPriceWithCommas } from 'utils';
import { Link } from 'react-router-dom';

function Order({ bookingState }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrderDetail, setSelectedOrderDetail] = useState(null);
  const [isOrderDetailModalOpen, setOrderDetailModalOpen] = useState(false);

  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = bookingState.bookings.content?.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const closeModal = () => {
    setSelectedOrderDetail(null);
    setOrderDetailModalOpen(false);
  };

  return (
    <div
      className="tab-pane"
      id="v-pills-profile"
      role="tabpanel"
      aria-labelledby="v-pills-profile-tab"
    >
      <div className="wsus_dashboard_body">
        <div className="wsus_dashboard_order">
          <div className="table-responsive">
            <table className="table table-striped">
              <tbody>
                <tr className="t_header">
                  <th>Booking</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Amount</th>
                  <th>Action</th>
                </tr>
                {currentOrders && currentOrders.map((order) => (
                  <tr key={order.id}>
                    <td>
                      <h5>
                        #
                        {order.id.substring(0, 7)}
                        ...
                      </h5>
                    </td>
                    <td>
                      <p>{order.date ? new Date(order.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) : ''}</p>
                    </td>
                    <td>
                      {order.status === 'ACCEPTED' && <span className="active">Accepted</span>}
                      {order.status === 'DONE' && <span className="complete">Done</span>}
                      {(order.status === 'CANCEL_BY_PROVIDER' || order.status === 'CANCEL_BY_CUSTOMER') && <span className="cancel">Cancelled</span>}
                      {order.status === 'COMING' && <span className="active">Coming</span>}
                      {order.status === 'DOING' && <span className="active">Doing</span>}
                      {order.status === 'BOOKED' && <span className="cancel">Booked</span>}
                    </td>
                    <td>
                      <h5>
                        {formatPriceWithCommas(order.totalPrice || 0)}
                        đ
                      </h5>
                    </td>
                    <td>
                      <Link
                        to={`/booking/detail/${order.id}`}
                        className="view_invoice"
                      >
                        View Details
                      </Link>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>

          <Pagination
            totalItems={bookingState.bookings?.content?.length}
            itemsPerPage={itemsPerPage}
            onPageChange={handlePageChange}
            currentPage={currentPage}
          />
        </div>

        <OrderDetail
          orderDetail={selectedOrderDetail}
          isOpen={isOrderDetailModalOpen}
          onClose={closeModal}
        />

        <div className="wsus__invoice">
          <a className="go_back">
            <i className="fas fa-long-arrow-alt-left" />
            {' '}
            go back
          </a>
          <div id="invoice_box" />
        </div>
      </div>
    </div>
  );
}

Order.propTypes = {
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

Order.defaultProps = {
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

export default Order;
