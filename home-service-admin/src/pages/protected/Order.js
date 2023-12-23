import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { actionDeleteBooking, actionGetAllBookings } from 'store/actions';

import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import Pagination from 'components/Pagination/Pagination';

function InternalPage(){

    const dispatch = useDispatch();
    const bookings = useSelector((state) => state.Admin.bookings);

    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastItem = currentPage * 5;
    const indexOfFirstItem = indexOfLastItem - 5;
    const currentData = bookings.content?.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleDeleteBooking = (couponId) => {
        dispatch(actionDeleteBooking({id: couponId}))
    };

    useEffect(() => {
    dispatch(setPageTitle({ title: 'Bookings' }));
    dispatch(actionGetAllBookings());
    }, [dispatch]);

    return (
        <div className="h-4/5 bg-base-200">
            <div className="text-accent">
            <div className="max-w-md">
                <table className="table w-full mt-4">
                <thead>
                    <tr>
                    <th style={{ position: 'static', left: 'auto' }}>Customer</th>
                    <th>Provider</th>
                    <th>Service</th>
                    <th>Booking Items</th>
                    <th>Moving Fee</th>
                    <th>Subtotal</th>
                    <th>Total Price</th>
                    <th>Time</th>
                    <th>Date</th>
                    <th>Arrive Time</th>
                    <th>Status</th>
                    <th>Payment Method</th>
                    <th>Payment Status</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData ? (
                    currentData.map((booking) => (
                        <tr key={booking.id}>
                            <td>{`${booking.customer.firstName} ${booking.customer.lastName}`}</td>
                            <td>{`${booking.provider.firstName} ${booking.provider.lastName}`}</td>
                            <td>{booking.service.name}</td>
                            <td>
                                {booking.bookingItems.map((bookingItem) => (
                                <div key={bookingItem.id}>
                                    <p>{bookingItem.work.description} - Quantity: {bookingItem.quantity}</p>
                                </div>
                                ))}
                            </td>
                            <td>{booking.movingFee}</td>
                            <td>{booking.subTotal}</td>
                            <td>{booking.totalPrice}</td>
                            <td>{booking.time}</td>
                            <td>{booking.date}</td>
                            <td>{booking.arriveTime}</td>
                            <td>{booking.status}</td>
                            <td>{booking.payment.method}</td>
                            <td>{booking.payment.paymentStatus}</td>
                            <td>
                                <button className="icon-btn" onClick={() => handleDeleteBooking(booking.id)}>
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                            </td>
                        </tr>
                    ))
                    ) : (
                    <tr>
                        <td colSpan="13">No booking found</td>
                    </tr>
                    )}
                </tbody>
                </table>

                <Pagination
                    totalItems={bookings?.content?.length}
                    onPageChange={handlePageChange}
                    currentPage={currentPage}
                />
            </div>
            </div>
        </div>
    );
}

export default InternalPage