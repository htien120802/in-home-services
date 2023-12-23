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

const initialState = {
  loading: false,
  customerReview: null,
  serviceReviews: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET_CUSTOMER_SERVICE_REVIEW
    case GET_CUSTOMER_SERVICE_REVIEW:
    case CREATE_CUSTOMER_SERVICE_REVIEW:
    case GET_ALL_SERVICE_REVIEWS:
      return {
        ...state,
        loading: true,
      };

    case GET_CUSTOMER_SERVICE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        customerReview: action.payload,
      };

    case CREATE_CUSTOMER_SERVICE_REVIEW_SUCCESS:
      return {
        ...state,
        loading: false,
        customerReview: action.payload,
      };

    case GET_ALL_SERVICE_REVIEWS_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceReviews: action.payload,
      };

    case GET_CUSTOMER_SERVICE_REVIEW_FAILED:
    case CREATE_CUSTOMER_SERVICE_REVIEW_FAILED:
    case GET_ALL_SERVICE_REVIEWS_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reviewReducer;
