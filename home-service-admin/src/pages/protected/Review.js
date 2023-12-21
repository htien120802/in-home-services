import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import { actionDeleteReview, actionGetAllReviews } from 'store/actions';
import { openModal } from 'features/common/modalSlice';
import { MODAL_BODY_TYPES } from 'utils/globalConstantUtil';

import TrashIcon from '@heroicons/react/24/outline/TrashIcon';
import ArrowPathIcon from '@heroicons/react/24/outline/ArrowPathIcon';

function InternalPage(){
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.Admin.reviews);

    const handleUpdateReview = (couponId) => {
        const selectedReview = reviews.find((review) => review._id === couponId);

        dispatch(
            openModal({
                title: 'Update Review',
                bodyType: MODAL_BODY_TYPES.UPDATE_REVIEW,
                extraObject: selectedReview,
            })
        );
    };

    const handleDeleteReview = (couponId) => {
        dispatch(actionDeleteReview({id: couponId}))
    };

    useEffect(() => {
    dispatch(setPageTitle({ title: 'Reviews' }));
    dispatch(actionGetAllReviews());
    }, [dispatch]);

    return (
    <div className="h-4/5 bg-base-200">
        <div className="text-accent">
        <div className="max-w-md">
            <table className="table w-full mt-4">
            <thead>
                <tr>
                <th style={{ position: 'static', left: 'auto' }}>ID</th>
                <th>Star</th>
                <th>Product ID</th>
                <th>Comment</th>
                </tr>
            </thead>
            <tbody>
                {reviews.length > 0 ? (
                reviews.map((review) => (
                    <tr key={review._id}>
                    <td>{review._id}</td>
                    <td>{review.star}</td>
                    <td>{review.productID}</td>
                    <td>{review.comment}</td>
                    <td>
                        <button className="icon-btn" onClick={() => handleUpdateReview(review._id)}>
                            <ArrowPathIcon className="h-5 w-5" />
                        </button>
                        <button className="icon-btn" onClick={() => handleDeleteReview(review._id)}>
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
        </div>
        </div>
    </div>
    );
}

export default InternalPage