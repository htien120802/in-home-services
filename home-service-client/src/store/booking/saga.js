import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import bookingAPI from 'apis/booking/bookingAPI';

import {
  UPDATE_BOOKING_STATUS,
  PROVIDER_CANCEL_BOOKING,
  CUSTOMER_CANCEL_BOOKING,
  GET_CUSTOMER_BOOKINGS,
  CREATE_BOOKING,
  GET_CUSTOMER_BOOKINGS_BY_STATUS,
} from './actionTypes';

import {
  actionUpdateBookingStatusSuccess,
  actionUpdateBookingStatusFailed,
  actionProviderCancelBookingSuccess,
  actionProviderCancelBookingFailed,
  actionCustomerCancelBookingSuccess,
  actionCustomerCancelBookingFailed,
  actionGetCustomerBookingsSuccess,
  actionGetCustomerBookingsFailed,
  actionCreateBookingSuccess,
  actionCreateBookingFailed,
  actionGetCustomerBookingsByStatusSuccess,
  actionGetCustomerBookingsByStatusFailed,
} from './actions';

function* updateBookingStatus({ payload }) {
  try {
    const { bookingId, status } = payload;

    const response = yield call(bookingAPI.updateBookingStatus, bookingId, status);

    yield put(actionUpdateBookingStatusSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionUpdateBookingStatusFailed());
  }
}

function* providerCancelBooking({ payload }) {
  try {
    const { bookingId } = payload;

    const response = yield call(bookingAPI.providerCancelBooking, bookingId);

    yield put(actionProviderCancelBookingSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionProviderCancelBookingFailed());
  }
}

function* customerCancelBooking({ payload }) {
  try {
    const { bookingId } = payload;

    const response = yield call(bookingAPI.customerCancelBooking, bookingId);

    yield put(actionCustomerCancelBookingSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionCustomerCancelBookingFailed());
  }
}

function* getCustomerBookings() {
  try {
    const response = yield call(bookingAPI.getCustomerBookings);

    yield put(actionGetCustomerBookingsSuccess(response.data.bookings));
  } catch (error) {
    yield put(actionGetCustomerBookingsFailed());
  }
}

function* createBooking({ payload }) {
  try {
    const { bookingData } = payload;

    const response = yield call(bookingAPI.createBooking, bookingData);

    yield put(actionCreateBookingSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionCreateBookingFailed());
  }
}

function* getCustomerBookingsByStatus({ payload }) {
  try {
    const { status } = payload;

    const response = yield call(bookingAPI.getCustomerBookingsByStatus, status);

    yield put(actionGetCustomerBookingsByStatusSuccess(response.data.bookings));
  } catch (error) {
    yield put(actionGetCustomerBookingsByStatusFailed());
  }
}

export default function* bookingSaga() {
  yield takeLeading(UPDATE_BOOKING_STATUS, updateBookingStatus);
  yield takeLeading(PROVIDER_CANCEL_BOOKING, providerCancelBooking);
  yield takeLeading(CUSTOMER_CANCEL_BOOKING, customerCancelBooking);
  yield takeLeading(GET_CUSTOMER_BOOKINGS, getCustomerBookings);
  yield takeLeading(CREATE_BOOKING, createBooking);
  yield takeLeading(GET_CUSTOMER_BOOKINGS_BY_STATUS, getCustomerBookingsByStatus);
}
