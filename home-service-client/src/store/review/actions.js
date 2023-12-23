import {
  GET_CUSTOMER_SERVICE_REVIEW,
  GET_CUSTOMER_SERVICE_REVIEW_SUCCESS,
  GET_CUSTOMER_SERVICE_REVIEW_FAILED,
  CREATE_CUSTOMER_SERVICE_REVIEW,
  CREATE_CUSTOMER_SERVICE_REVIEW_SUCCESS,
  CREATE_CUSTOMER_SERVICE_REVIEW_FAILED,
  GET_ALL_SERVICE_REVIEWS,
  GET_ALL_SERVICE_REVIEWS_SUCCESS,
  GET_ALL_SERVICE_REVIEWS_FAILED,
} from './actionTypes';

// GET_CUSTOMER_SERVICE_REVIEW
export const actionGetCustomerServiceReview = (serviceId) => ({
  type: GET_CUSTOMER_SERVICE_REVIEW,
  payload: serviceId,
});

export const actionGetCustomerServiceReviewSuccess = (payload) => ({
  type: GET_CUSTOMER_SERVICE_REVIEW_SUCCESS,
  payload,
});

export const actionGetCustomerServiceReviewFailed = () => ({
  type: GET_CUSTOMER_SERVICE_REVIEW_FAILED,
});

// CREATE_CUSTOMER_SERVICE_REVIEW
export const actionCreateCustomerServiceReview = (serviceId, reviewData) => ({
  type: CREATE_CUSTOMER_SERVICE_REVIEW,
  payload: { serviceId, reviewData },
});

export const actionCreateCustomerServiceReviewSuccess = (payload) => ({
  type: CREATE_CUSTOMER_SERVICE_REVIEW_SUCCESS,
  payload,
});

export const actionCreateCustomerServiceReviewFailed = () => ({
  type: CREATE_CUSTOMER_SERVICE_REVIEW_FAILED,
});

// GET_ALL_SERVICE_REVIEWS
export const actionGetAllServiceReviews = (payload) => ({
  type: GET_ALL_SERVICE_REVIEWS,
  payload,
});

export const actionGetAllServiceReviewsSuccess = (payload) => ({
  type: GET_ALL_SERVICE_REVIEWS_SUCCESS,
  payload,
});

export const actionGetAllServiceReviewsFailed = () => ({
  type: GET_ALL_SERVICE_REVIEWS_FAILED,
});
