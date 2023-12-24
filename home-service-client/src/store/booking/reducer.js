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
  GET_PROVIDER_BOOKINGS,
  GET_PROVIDER_BOOKINGS_SUCCESS,
  GET_PROVIDER_BOOKINGS_FAILED,
  GET_CUSTOMER_BOOKINGS,
  GET_CUSTOMER_BOOKINGS_SUCCESS,
  GET_CUSTOMER_BOOKINGS_FAILED,
  CREATE_BOOKING,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAILED,
  CREATE_BOOKING_CALC,
  CREATE_BOOKING_CALC_SUCCESS,
  CREATE_BOOKING_CALC_FAILED,
  GET_CUSTOMER_BOOKINGS_BY_STATUS,
  GET_CUSTOMER_BOOKINGS_BY_STATUS_SUCCESS,
  GET_CUSTOMER_BOOKINGS_BY_STATUS_FAILED,
  SET_SELECTED_WORKS,
  SET_SELECTED_WORKS_SUCCESS,
  SET_SELECTED_WORKS_FAILED,
  GET_CUSTOMER_BOOKING,
  GET_CUSTOMER_BOOKING_SUCCESS,
  GET_CUSTOMER_BOOKING_FAILED,
  GET_PROVIDER_BOOKING,
  GET_PROVIDER_BOOKING_SUCCESS,
  GET_PROVIDER_BOOKING_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  bookings: [],
  bookingDetail: null,
  works: [],
  totalPrice: 0,
  finalPrice: 0,
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
    case GET_PROVIDER_BOOKINGS:
    case SET_SELECTED_WORKS:
    case CREATE_BOOKING_CALC:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_BOOKING_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: {
          content: state.bookings.content.filter((booking) => booking.id !== action.payload),
        },
      };

    case CREATE_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        bookingDetail: action.payload,
      };

    case CREATE_BOOKING_CALC_SUCCESS:
      return {
        ...state,
        loading: false,
        finalPrice: action.payload,
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
        bookings: action.payload,
      };

    case GET_PROVIDER_BOOKINGS_SUCCESS:
      return {
        ...state,
        loading: false,
        bookings: action.payload,
      };

    case SET_SELECTED_WORKS_SUCCESS:
      return {
        ...state,
        loading: false,
        works: action.payload.selectedWorks,
        totalPrice: action.payload.totalPrice,
      };

    case PROVIDER_CANCEL_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        bookingDetail: {
          ...state.bookingDetail,
          status: 'CANCEL_BY_PROVIDER',
        },
      };

    case CUSTOMER_CANCEL_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        bookingDetail: {
          ...state.bookingDetail,
          status: 'CANCEL_BY_CUSTOMER',
        },
      };

    case UPDATE_BOOKING_STATUS_FAILED:
    case PROVIDER_CANCEL_BOOKING_FAILED:
    case CUSTOMER_CANCEL_BOOKING_FAILED:
    case GET_CUSTOMER_BOOKINGS_FAILED:
    case CREATE_BOOKING_FAILED:
    case GET_CUSTOMER_BOOKINGS_BY_STATUS_FAILED:
    case GET_PROVIDER_BOOKINGS_FAILED:
    case SET_SELECTED_WORKS_FAILED:
    case CREATE_BOOKING_CALC_FAILED:
      return {
        ...state,
        loading: false,
      };

      // GET_PROVIDER_BOOKING
    case GET_PROVIDER_BOOKING:
      return {
        ...state,
        loading: true,
      };

    case GET_PROVIDER_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        bookingDetail: action.payload,
      };

    case GET_PROVIDER_BOOKING_FAILED:
      return {
        ...state,
        loading: false,
      };

    // GET_CUSTOMER_BOOKING
    case GET_CUSTOMER_BOOKING:
      return {
        ...state,
        loading: true,
      };

    case GET_CUSTOMER_BOOKING_SUCCESS:
      return {
        ...state,
        loading: false,
        bookingDetail: action.payload,
      };

    case GET_CUSTOMER_BOOKING_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default bookingReducer;
