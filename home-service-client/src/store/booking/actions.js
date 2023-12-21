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
  GET_PROVIDER_BOOKINGS,
  GET_PROVIDER_BOOKINGS_SUCCESS,
  GET_PROVIDER_BOOKINGS_FAILED,
  CREATE_BOOKING,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAILED,
  GET_CUSTOMER_BOOKINGS_BY_STATUS,
  GET_CUSTOMER_BOOKINGS_BY_STATUS_SUCCESS,
  GET_CUSTOMER_BOOKINGS_BY_STATUS_FAILED,
} from './actionTypes';

// UPDATE_BOOKING_STATUS
export const actionUpdateBookingStatus = (bookingId, newStatus) => ({
  type: UPDATE_BOOKING_STATUS,
  payload: { bookingId, newStatus },
});

export const actionUpdateBookingStatusSuccess = (payload) => ({
  type: UPDATE_BOOKING_STATUS_SUCCESS,
  payload,
});

export const actionUpdateBookingStatusFailed = () => ({
  type: UPDATE_BOOKING_STATUS_FAILED,
});

// PROVIDER_CANCEL_BOOKING
export const actionProviderCancelBooking = (bookingId) => ({
  type: PROVIDER_CANCEL_BOOKING,
  payload: { bookingId },
});

export const actionProviderCancelBookingSuccess = (payload) => ({
  type: PROVIDER_CANCEL_BOOKING_SUCCESS,
  payload,
});

export const actionProviderCancelBookingFailed = () => ({
  type: PROVIDER_CANCEL_BOOKING_FAILED,
});

// CUSTOMER_CANCEL_BOOKING
export const actionCustomerCancelBooking = (bookingId) => ({
  type: CUSTOMER_CANCEL_BOOKING,
  payload: { bookingId },
});

export const actionCustomerCancelBookingSuccess = (payload) => ({
  type: CUSTOMER_CANCEL_BOOKING_SUCCESS,
  payload,
});

export const actionCustomerCancelBookingFailed = () => ({
  type: CUSTOMER_CANCEL_BOOKING_FAILED,
});

// GET_CUSTOMER_BOOKINGS
export const actionGetCustomerBookings = () => ({
  type: GET_CUSTOMER_BOOKINGS,
});

export const actionGetCustomerBookingsSuccess = (payload) => ({
  type: GET_CUSTOMER_BOOKINGS_SUCCESS,
  payload,
});

export const actionGetCustomerBookingsFailed = () => ({
  type: GET_CUSTOMER_BOOKINGS_FAILED,
});

// GET_PROVIDER_BOOKINGS
export const actionGetProviderBookings = () => ({
  type: GET_PROVIDER_BOOKINGS,
});

export const actionGetProviderBookingsSuccess = (payload) => ({
  type: GET_PROVIDER_BOOKINGS_SUCCESS,
  payload,
});

export const actionGetProviderBookingsFailed = () => ({
  type: GET_PROVIDER_BOOKINGS_FAILED,
});

// CREATE_BOOKING
export const actionCreateBooking = (bookingData) => ({
  type: CREATE_BOOKING,
  payload: bookingData,
});

export const actionCreateBookingSuccess = (payload) => ({
  type: CREATE_BOOKING_SUCCESS,
  payload,
});

export const actionCreateBookingFailed = () => ({
  type: CREATE_BOOKING_FAILED,
});

// GET_CUSTOMER_BOOKINGS_BY_STATUS
export const actionGetCustomerBookingsByStatus = (status) => ({
  type: GET_CUSTOMER_BOOKINGS_BY_STATUS,
  payload: { status },
});

export const actionGetCustomerBookingsByStatusSuccess = (payload) => ({
  type: GET_CUSTOMER_BOOKINGS_BY_STATUS_SUCCESS,
  payload,
});

export const actionGetCustomerBookingsByStatusFailed = () => ({
  type: GET_CUSTOMER_BOOKINGS_BY_STATUS_FAILED,
});
