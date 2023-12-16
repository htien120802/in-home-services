import {
  UPDATE_BOOKING_STATUS,
  UPDATE_BOOKING_STATUS_SUCCESS,
  UPDATE_BOOKING_STATUS_FAILED,
  PROVIDER_CANCEL_BOOKING,
  PROVIDER_CANCEL_BOOKING_SUCCESS,
  PROVIDER_CANCEL_BOOKING_FAILED,
  CUSTOMER_CANCEL_BOOKING,
  CUSTOMER_CANCEL_BOOKING_SUCCESS,
  CUSTOMER_CANCEL_BOOKING_FAILED,
  GET_CUSTOMER_BOOKINGS,
  GET_CUSTOMER_BOOKINGS_SUCCESS,
  GET_CUSTOMER_BOOKINGS_FAILED,
  CREATE_BOOKING,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAILED,
  GET_CUSTOMER_BOOKINGS_BY_STATUS,
  GET_CUSTOMER_BOOKINGS_BY_STATUS_SUCCESS,
  GET_CUSTOMER_BOOKINGS_BY_STATUS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  bookings: [],
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    // UPDATE_BOOKING_STATUS
    case UPDATE_BOOKING_STATUS:
    case PROVIDER_CANCEL_BOOKING:
    case CUSTOMER_CANCEL_BOOKING:
    case GET_CUSTOMER_BOOKINGS:
    case CREATE_BOOKING:
    case GET_CUSTOMER_BOOKINGS_BY_STATUS:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_BOOKING_STATUS_SUCCESS:
    case PROVIDER_CANCEL_BOOKING_SUCCESS:
    case CUSTOMER_CANCEL_BOOKING_SUCCESS:
    case CREATE_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload.bookings,
      };

    case GET_CUSTOMER_BOOKINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload,
      };

    case GET_CUSTOMER_BOOKINGS_BY_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload.bookings,
      };

    case UPDATE_BOOKING_STATUS_FAILED:
    case PROVIDER_CANCEL_BOOKING_FAILED:
    case CUSTOMER_CANCEL_BOOKING_FAILED:
    case GET_CUSTOMER_BOOKINGS_FAILED:
    case CREATE_BOOKING_FAILED:
    case GET_CUSTOMER_BOOKINGS_BY_STATUS_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default bookingReducer;
