import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import customerAPI from 'apis/customer/customerAPI';

import {
  GET_CUSTOMER_PROFILE,
  UPDATE_CUSTOMER_PROFILE,
  UPDATE_CUSTOMER_PASSWORD,
  UPDATE_CUSTOMER_AVATAR,
  UPDATE_CUSTOMER_ADDRESS,
  ADD_CUSTOMER_ADDRESS,
} from './actionTypes';

import {
  actionGetCustomerProfileSuccess,
  actionGetCustomerProfileFailed,
  actionUpdateCustomerProfileSuccess,
  actionUpdateCustomerProfileFailed,
  actionUpdateCustomerPasswordSuccess,
  actionUpdateCustomerPasswordFailed,
  actionUpdateCustomerAvatarSuccess,
  actionUpdateCustomerAvatarFailed,
  actionUpdateCustomerAddressSuccess,
  actionUpdateCustomerAddressFailed,
  actionAddCustomerAddressSuccess,
  actionAddCustomerAddressFailed,
} from './actions';

function* getCustomerProfile() {
  try {
    const response = yield call(customerAPI.getCustomerProfile);

    yield put(actionGetCustomerProfileSuccess(response.data));
  } catch (error) {
    yield put(actionGetCustomerProfileFailed());
  }
}

function* updateCustomerProfile({ payload }) {
  try {
    const { customerData } = payload;

    const response = yield call(customerAPI.updateCustomerProfile, customerData);

    yield put(actionUpdateCustomerProfileSuccess(response.data.customer));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionUpdateCustomerProfileFailed());
  }
}

function* updateCustomerPassword({ payload }) {
  try {
    const { newPassword } = payload;

    const response = yield call(customerAPI.updateCustomerPassword, newPassword);

    yield put(actionUpdateCustomerPasswordSuccess(response.data.customer));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionUpdateCustomerPasswordFailed());
  }
}

function* updateCustomerAvatar({ payload }) {
  try {
    const { avatar } = payload;

    const response = yield call(customerAPI.updateCustomerAvatar, avatar);

    yield put(actionUpdateCustomerAvatarSuccess(response.data.customer));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionUpdateCustomerAvatarFailed());
  }
}

function* updateCustomerAddress({ payload }) {
  try {
    const { addressData } = payload;

    const response = yield call(customerAPI.updateCustomerAddress, addressData);

    yield put(actionUpdateCustomerAddressSuccess(response.data.addresses));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionUpdateCustomerAddressFailed());
  }
}

function* addCustomerAddress({ payload }) {
  try {
    const { newAddress } = payload;

    const response = yield call(customerAPI.addCustomerAddress, newAddress);

    yield put(actionAddCustomerAddressSuccess(response.data.addresses));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionAddCustomerAddressFailed());
  }
}

export default function* customerSaga() {
  yield takeLeading(GET_CUSTOMER_PROFILE, getCustomerProfile);
  yield takeLeading(UPDATE_CUSTOMER_PROFILE, updateCustomerProfile);
  yield takeLeading(UPDATE_CUSTOMER_PASSWORD, updateCustomerPassword);
  yield takeLeading(UPDATE_CUSTOMER_AVATAR, updateCustomerAvatar);
  yield takeLeading(UPDATE_CUSTOMER_ADDRESS, updateCustomerAddress);
  yield takeLeading(ADD_CUSTOMER_ADDRESS, addCustomerAddress);
}
