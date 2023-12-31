import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import adminAPI from 'apis/admin/adminAPI';

import { GET_ALL_SERVICES,
  UPDATE_SERVICE,
  CREATE_SERVICE,
  UPDATE_PROVIDER_PROFILE,
  DELETE_PROVIDER,
  UPDATE_CUSTOMER_PROFILE,
  DELETE_CUSTOMER,
  GET_ALL_PROVIDERS,
  CREATE_PROVIDER,
  GET_ALL_CUSTOMERS,
  CREATE_CUSTOMER,
  GET_SALES_STATISTICS,
  GET_QUANTITY_STATISTICS,
  GET_ALL_REVIEWS,
  GET_REVIEW,
  DELETE_REVIEW,
  GET_ENTITY_COUNT,
  GET_ALL_BOOKINGS,
  GET_BOOKING,
  DELETE_BOOKING,
  DELETE_SERVICE,
  DELETE_ADDRESS,
  APPROVE_OR_UNAPPROVE_REGISTER_SERVICE,
  GET_COUNT,
  GET_SALES_STATISTICS_BY_PROVIDER,
  GET_QUANTITY_STATISTICS_BY_PROVIDER,
  GET_TOP_SALES_PROVIDER,
  GET_TOP_QUANTITY_PROVIDER,
} from './actionTypes';

import {
  actionGetAllServicesSuccess,
  actionGetAllServicesFailed,
  actionUpdateServiceSuccess,
  actionUpdateServiceFailed,
  actionCreateServiceSuccess,
  actionCreateServiceFailed,
  actionUpdateProviderProfileSuccess,
  actionUpdateProviderProfileFailed,
  actionDeleteProviderSuccess,
  actionDeleteProviderFailed,
  actionUpdateCustomerProfileSuccess,
  actionUpdateCustomerProfileFailed,
  actionDeleteCustomerSuccess,
  actionDeleteCustomerFailed,
  actionGetAllProvidersSuccess,
  actionGetAllProvidersFailed,
  actionCreateProviderSuccess,
  actionCreateProviderFailed,
  actionGetAllCustomersSuccess,
  actionGetAllCustomersFailed,
  actionCreateCustomerSuccess,
  actionCreateCustomerFailed,
  actionGetSalesStatisticsSuccess,
  actionGetSalesStatisticsFailed,
  actionGetQuantityStatisticsSuccess,
  actionGetQuantityStatisticsFailed,
  actionGetAllReviewsSuccess,
  actionGetAllReviewsFailed,
  actionGetReviewSuccess,
  actionGetReviewFailed,
  actionDeleteReviewSuccess,
  actionDeleteReviewFailed,
  actionGetEntityCountSuccess,
  actionGetEntityCountFailed,
  actionGetAllBookingsSuccess,
  actionGetAllBookingsFailed,
  actionGetBookingSuccess,
  actionGetBookingFailed,
  actionDeleteBookingSuccess,
  actionDeleteBookingFailed,
  actionDeleteServiceSuccess,
  actionDeleteServiceFailed,
  actionDeleteAddressSuccess,
  actionDeleteAddressFailed,
  actionApproveOrUnapproveRegisterServiceSuccess,
  actionApproveOrUnapproveRegisterServiceFailed,
  actionGetCountSuccess,
  actionGetCountFailed,
  actionGetSalesStatisticsByProviderSuccess,
  actionGetSalesStatisticsByProviderFailed,
  actionGetQuantityStatisticsByProviderSuccess,
  actionGetQuantityStatisticsByProviderFailed,
  actionGetTopSalesProviderSuccess,
  actionGetTopSalesProviderFailed,
  actionGetTopQuantityProviderSuccess,
  actionGetTopQuantityProviderFailed,
} from './actions';

function* getCount() {
  try {
    const response = yield call(adminAPI.getCount);

    yield put(actionGetCountSuccess(response.data));
  } catch (error) {
    yield put(actionGetCountFailed());
    toast.error(error.response.data.message);
  }
}

function* getSalesStatistics({ payload }) {
  try {
    const response = yield call(adminAPI.getSalesStatisticsByMonthYear, payload);

    yield put(actionGetSalesStatisticsSuccess(response.data));
  } catch (error) {
    console.log(error)
    yield put(actionGetSalesStatisticsFailed());
    toast.error(error.response.data.message);
  }
}

function* getQuantityStatistics({ payload }) {
  try {
    const response = yield call(adminAPI.getQuantityStatisticsByMonthYear, payload);

    yield put(actionGetQuantityStatisticsSuccess(response.data));
  } catch (error) {
    yield put(actionGetQuantityStatisticsFailed());
    toast.error(error.response.data.message);
  }
}

function* getSalesStatisticsByProvider({ payload }) {
  try {
    const response = yield call(adminAPI.getSalesStatisticsByMonthYearAndProvider, payload);

    yield put(actionGetSalesStatisticsByProviderSuccess(response.data));
  } catch (error) {
    yield put(actionGetSalesStatisticsByProviderFailed());
    toast.error(error.response.data.message);
  }
}

function* getQuantityStatisticsByProvider({ payload }) {
  try {
    const response = yield call(adminAPI.getQuantityStatisticsByMonthYearAndProvider, payload);

    yield put(actionGetQuantityStatisticsByProviderSuccess(response.data));
  } catch (error) {
    yield put(actionGetQuantityStatisticsByProviderFailed());
    toast.error(error.response.data.message);
  }
}

function* getTopSalesProvider({payload}) {
  try {
    const response = yield call(adminAPI.getTopSalesProvider, payload);

    yield put(actionGetTopSalesProviderSuccess(response.data));
  } catch (error) {
    yield put(actionGetTopSalesProviderFailed());
    toast.error(error.response.data.message);
  }
}

function* getTopQuantityProvider({payload}) {
  try {
    const response = yield call(adminAPI.getTopQuantityProvider, payload);

    yield put(actionGetTopQuantityProviderSuccess(response.data));
  } catch (error) {
    yield put(actionGetTopQuantityProviderFailed());
    toast.error(error.response.data.message);
  }
}

function* getAllServices({ payload }) {
  try {
    const response = yield call(adminAPI.getAllServices, payload);

    yield put(actionGetAllServicesSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllServicesFailed());
    toast.error(error.response.data.message);
  }
}

function* updateService({ payload }) {
  try {
    const { serviceId, updatedData, callback } = payload;
    const response = yield call(adminAPI.updateService, serviceId, updatedData);

    yield put(actionUpdateServiceSuccess(response.data));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionUpdateServiceFailed());
    toast.error(error.response.data.message);
  }
}

function* createService({ payload }) {
  try {
    const { newData, callback } = payload;
    const response = yield call(adminAPI.createService, newData);

    yield put(actionCreateServiceSuccess(response.data));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionCreateServiceFailed());
    toast.error(error.response.data.message);
  }
}

function* updateProviderProfile({ payload }) {
  try {
    const { providerId, updatedData, callback } = payload;
    const response = yield call(adminAPI.updateProviderProfile, providerId, updatedData);

    yield put(actionUpdateProviderProfileSuccess(response.data));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionUpdateProviderProfileFailed());
    toast.error(error.response.data.message);
  }
}

function* deleteProvider({ payload }) {
  try {
    const { providerId, callback } = payload;
    const response = yield call(adminAPI.deleteProvider, providerId);

    yield put(actionDeleteProviderSuccess(providerId));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionDeleteProviderFailed());
    toast.error(error.response.data.message);
  }
}

function* updateCustomerProfile({ payload }) {
  try {
    const { customerId, updatedData, callback } = payload;
    const response = yield call(adminAPI.updateCustomerProfile, customerId, updatedData);

    yield put(actionUpdateCustomerProfileSuccess(response.data));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionUpdateCustomerProfileFailed());
    toast.error(error.response.data.message);
  }
}

function* deleteCustomer({ payload }) {
  try {
    const { customerId, callback } = payload;
    const response = yield call(adminAPI.deleteCustomer, customerId);

    yield put(actionDeleteCustomerSuccess(customerId));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionDeleteCustomerFailed());
    toast.error(error.response.data.message);
  }
}

function* getAllProviders({payload}) {
  try {
    const response = yield call(adminAPI.getAllProviders, payload);

    yield put(actionGetAllProvidersSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllProvidersFailed());
    toast.error(error.response.data.message);
  }
}

function* createProvider({ payload }) {
  try {
    const { newData, callback } = payload;
    const response = yield call(adminAPI.createProvider, newData);

    yield put(actionCreateProviderSuccess(response.data));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionCreateProviderFailed());
    toast.error(error.response.data.message);
  }
}

function* getAllCustomers({payload}) {
  try {
    const response = yield call(adminAPI.getAllCustomers, payload);

    yield put(actionGetAllCustomersSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllCustomersFailed());
    toast.error(error.response.data.message);
  }
}

function* createCustomer({ payload }) {
  try {
    const { newData, callback } = payload;
    const response = yield call(adminAPI.createCustomer, newData);

    yield put(actionCreateCustomerSuccess(response.data));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionCreateCustomerFailed());
    toast.error(error.response.data.message);
  }
}

function* getAllReviews({payload}) {
  try {
    const response = yield call(adminAPI.getAllReviews, payload);

    yield put(actionGetAllReviewsSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllReviewsFailed());
    toast.error(error.response.data.message);
  }
}

function* getReview({ payload }) {
  try {
    const { reviewId } = payload;
    const response = yield call(adminAPI.getReview, reviewId);

    yield put(actionGetReviewSuccess(response.data));
  } catch (error) {
    yield put(actionGetReviewFailed());
    toast.error(error.response.data.message);
  }
}

function* deleteReview({ payload }) {
  try {
    const { reviewId, callback } = payload;
    const response = yield call(adminAPI.deleteReview, reviewId);

    yield put(actionDeleteReviewSuccess(reviewId));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionDeleteReviewFailed());
    toast.error(error.response.data.message);
  }
}

function* getEntityCount() {
  try {
    const response = yield call(adminAPI.getEntityCount);

    yield put(actionGetEntityCountSuccess(response.data));
  } catch (error) {
    yield put(actionGetEntityCountFailed());
    toast.error(error.response.data.message);
  }
}

function* getAllBookings({payload}) {
  try {
    const response = yield call(adminAPI.getAllBookings, payload);

    yield put(actionGetAllBookingsSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllBookingsFailed());
    toast.error(error.response.data.message);
  }
}

function* getBooking({ payload }) {
  try {
    const { bookingId } = payload;
    const response = yield call(adminAPI.getBooking, bookingId);

    yield put(actionGetBookingSuccess(response.data));
  } catch (error) {
    yield put(actionGetBookingFailed());
    toast.error(error.response.data.message);
  }
}

function* deleteBooking({ payload }) {
  try {
    const { bookingId, callback } = payload;
    const response = yield call(adminAPI.deleteBooking, bookingId);

    yield put(actionDeleteBookingSuccess(bookingId));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionDeleteBookingFailed());
    toast.error(error.response.data.message);
  }
}

function* deleteService({ payload }) {
  try {
    const { serviceId, callback } = payload;
    const response = yield call(adminAPI.deleteService, serviceId);

    yield put(actionDeleteServiceSuccess(serviceId));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionDeleteServiceFailed());
    toast.error(error.response.data.message);
  }
}

function* deleteAddress({ payload }) {
  try {
    const { addressId, callback } = payload;
    const response = yield call(adminAPI.deleteAddress, addressId);

    yield put(actionDeleteAddressSuccess(addressId));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionDeleteAddressFailed());
    toast.error(error.response.data.message);
  }
}

function* approveOrUnapproveRegisterService({ payload }) {
  try {
    const response = yield call(adminAPI.approveOrUnapproveRegisterService, payload);

    yield put(actionApproveOrUnapproveRegisterServiceSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionApproveOrUnapproveRegisterServiceFailed());
  }
}

export default function* loginSaga() {
  yield takeLeading(GET_ALL_SERVICES, getAllServices);
  yield takeLeading(GET_COUNT, getCount);
  yield takeLeading(UPDATE_SERVICE, updateService);
  yield takeLeading(CREATE_SERVICE, createService);
  yield takeLeading(UPDATE_PROVIDER_PROFILE, updateProviderProfile);
  yield takeLeading(DELETE_PROVIDER, deleteProvider);
  yield takeLeading(UPDATE_CUSTOMER_PROFILE, updateCustomerProfile);
  yield takeLeading(DELETE_CUSTOMER, deleteCustomer);
  yield takeLeading(GET_ALL_PROVIDERS, getAllProviders);
  yield takeLeading(CREATE_PROVIDER, createProvider);
  yield takeLeading(GET_ALL_CUSTOMERS, getAllCustomers);
  yield takeLeading(CREATE_CUSTOMER, createCustomer);
  yield takeLeading(GET_SALES_STATISTICS, getSalesStatistics);
  yield takeLeading(GET_QUANTITY_STATISTICS, getQuantityStatistics);
  yield takeLeading(GET_SALES_STATISTICS_BY_PROVIDER, getSalesStatisticsByProvider);
  yield takeLeading(GET_QUANTITY_STATISTICS_BY_PROVIDER, getQuantityStatisticsByProvider);
  yield takeLeading(GET_TOP_SALES_PROVIDER, getTopSalesProvider);
  yield takeLeading(GET_TOP_QUANTITY_PROVIDER, getTopQuantityProvider);
  yield takeLeading(GET_ALL_REVIEWS, getAllReviews);
  yield takeLeading(GET_REVIEW, getReview);
  yield takeLeading(DELETE_REVIEW, deleteReview);
  yield takeLeading(GET_ENTITY_COUNT, getEntityCount);
  yield takeLeading(GET_ALL_BOOKINGS, getAllBookings);
  yield takeLeading(GET_BOOKING, getBooking);
  yield takeLeading(DELETE_BOOKING, deleteBooking);
  yield takeLeading(DELETE_SERVICE, deleteService);
  yield takeLeading(DELETE_ADDRESS, deleteAddress);
  yield takeLeading(APPROVE_OR_UNAPPROVE_REGISTER_SERVICE, approveOrUnapproveRegisterService);
}
