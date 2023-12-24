import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { actionDeleteReview, actionGetAllReviews } from 'store/actions';

import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import Pagination from 'components/Pagination/Pagination';

function InternalPage(){
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.Admin.reviews);

    const [currentPage, setCurrentPage] = useState(1);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const handleDeleteReview = (couponId) => {
        dispatch(actionDeleteReview({reviewId: couponId}))
    };

    useEffect(() => {
    dispatch(setPageTitle({ title: 'Reviews' }));
    dispatch(actionGetAllReviews({pageNumber: currentPage - 1, size: 5}));
    }, [dispatch, currentPage]);

    return (
    <div className="h-4/5 bg-base-200">
        <div className="text-accent">
        <div className="max-w-md">
            <table className="table w-full mt-4">
            <thead>
                <tr>
                <th style={{ position: 'static', left: 'auto' }}>Star</th>
                <th>Customer</th>
                <th>Service</th>
                <th>Comment</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>
            {reviews && reviews.content ? (
            reviews.content.map((review) => (
                <tr key={review.id}>
                <td>{review.rating}</td>
                <td>
                    <strong>Customer:</strong> {review.customer.firstName} {review.customer.lastName}
                </td>
                <td><strong>Service:</strong> {review.service.name}</td>
                <td>{review.comment}</td>
                <td>
                    <button className="icon-btn" onClick={() => handleDeleteReview(review.id)}>
                    <TrashIcon className="h-5 w-5" />
                    </button>
                </td>
                </tr>
            ))
            ) : (
                <tr>
                    <td colSpan="4">No reviews found</td>
                </tr>
                )}
            </tbody>
            </table>

            <Pagination
                totalItems={reviews.totalElements}
                onPageChange={handlePageChange}
                currentPage={currentPage}
            />
        </div>
        </div>
    </div>
    );
}

export default InternalPage