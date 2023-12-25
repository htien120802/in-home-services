import { toast } from 'react-toastify';
import {
  put, takeLeading, call, takeLatest,
} from 'redux-saga/effects';

import bookingAPI from 'apis/booking/bookingAPI';

import {
  UPDATE_BOOKING_STATUS,
  PROVIDER_CANCEL_BOOKING,
  CUSTOMER_CANCEL_BOOKING,
  GET_CUSTOMER_BOOKINGS,
  CREATE_BOOKING,
  CREATE_BOOKING_CALC,
  GET_CUSTOMER_BOOKINGS_BY_STATUS,
  GET_PROVIDER_BOOKINGS,
  SET_SELECTED_WORKS,
  GET_CUSTOMER_BOOKING,
  GET_PROVIDER_BOOKING,
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
  actionCreateBookingCalcSuccess,
  actionCreateBookingCalcFailed,
  actionGetCustomerBookingsByStatusSuccess,
  actionGetCustomerBookingsByStatusFailed,
  actionGetProviderBookingsSuccess,
  actionGetProviderBookingsFailed,
  actionSetSelectedWorksSuccess,
  actionSetSelectedWorksFailed,
  actionGetProviderBookingSuccess,
  actionGetProviderBookingFailed,
  actionGetCustomerBookingSuccess,
  actionGetCustomerBookingFailed,
} from './actions';

function* updateBookingStatus({ payload }) {
  try {
    const { bookingId } = payload;

    const response = yield call(bookingAPI.updateBookingStatus, bookingId);

    yield put(actionUpdateBookingStatusSuccess({ bookingId, status: response.data }));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

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
    toast.error(error.response.data.message);

    yield put(actionProviderCancelBookingFailed());
  }
}

function* customerCancelBooking({ payload }) {
  try {
    const { bookingId } = payload;

    const response = yield call(bookingAPI.customerCancelBooking, bookingId);

    yield put(actionCustomerCancelBookingSuccess());

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionCustomerCancelBookingFailed());
  }
}

function* getCustomerBookings() {
  try {
    const response = yield call(bookingAPI.getAllCustomerBookings);

    yield put(actionGetCustomerBookingsSuccess(response.data));
  } catch (error) {
    yield put(actionGetCustomerBookingsFailed());
  }
}

function* createBooking({ payload }) {
  try {
    const response = yield call(bookingAPI.createBooking, payload);

    if (payload.paymentMethod === 'cash') {
      yield put(actionCreateBookingSuccess(response.data));
      if (response.status === 'success') {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } else if (payload.paymentMethod === 'vnpay') {
      if (response.status === 'success') {
        window.location.href = response.data;
      } else {
        toast.error(response.message);
        yield put(actionCreateBookingFailed());
      }
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionCreateBookingFailed());
  }
}

function* createBookingCalc({ payload }) {
  try {
    const response = yield call(bookingAPI.createBookingCalculate, payload);

    yield put(actionCreateBookingCalcSuccess(response.data));
  } catch (error) {
    yield put(actionCreateBookingCalcFailed());
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

function* getProviderBookings() {
  try {
    const response = yield call(bookingAPI.getAllProviderBookings);

    yield put(actionGetProviderBookingsSuccess(response.data));
  } catch (error) {
    yield put(actionGetProviderBookingsFailed());
  }
}

function* setSelectedWorks(action) {
  try {
    yield put(actionSetSelectedWorksSuccess(action.payload));
  } catch (error) {
    yield put(actionSetSelectedWorksFailed(action.payload));
  }
}

function* getProviderBooking({ payload }) {
  try {
    const { bookingId } = payload;

    const response = yield call(bookingAPI.getProviderBooking, bookingId);

    yield put(actionGetProviderBookingSuccess(response.data));
  } catch (error) {
    yield put(actionGetProviderBookingFailed());
  }
}

function* getCustomerBooking({ payload }) {
  try {
    const { bookingId } = payload;

    const response = yield call(bookingAPI.getCustomerBooking, bookingId);

    yield put(actionGetCustomerBookingSuccess(response.data));
  } catch (error) {
    const { callback } = payload;

    callback();
    yield put(actionGetCustomerBookingFailed());
  }
}

export default function* bookingSaga() {
  yield takeLeading(UPDATE_BOOKING_STATUS, updateBookingStatus);
  yield takeLeading(PROVIDER_CANCEL_BOOKING, providerCancelBooking);
  yield takeLeading(CUSTOMER_CANCEL_BOOKING, customerCancelBooking);
  yield takeLeading(GET_CUSTOMER_BOOKINGS, getCustomerBookings);
  yield takeLeading(GET_PROVIDER_BOOKINGS, getProviderBookings);
  yield takeLeading(CREATE_BOOKING, createBooking);
  yield takeLeading(CREATE_BOOKING_CALC, createBookingCalc);
  yield takeLeading(GET_CUSTOMER_BOOKINGS_BY_STATUS, getCustomerBookingsByStatus);
  yield takeLatest(SET_SELECTED_WORKS, setSelectedWorks);
  yield takeLeading(GET_PROVIDER_BOOKING, getProviderBooking);
  yield takeLeading(GET_CUSTOMER_BOOKING, getCustomerBooking);
}
