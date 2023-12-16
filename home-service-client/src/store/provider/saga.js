import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import providerAPI from 'apis/provider/providerAPI';

import {
  GET_PROVIDER_PROFILE,
  UPDATE_PROVIDER_PROFILE,
  UPDATE_PROVIDER_PASSWORD,
  UPDATE_PROVIDER_AVATAR,
  UPDATE_PROVIDER_ADDRESS,
  ADD_PROVIDER_ADDRESS,
} from './actionTypes';

import {
  actionGetProviderProfileSuccess,
  actionGetProviderProfileFailed,
  actionUpdateProviderProfileSuccess,
  actionUpdateProviderProfileFailed,
  actionUpdateProviderPasswordSuccess,
  actionUpdateProviderPasswordFailed,
  actionUpdateProviderAvatarSuccess,
  actionUpdateProviderAvatarFailed,
  actionUpdateProviderAddressSuccess,
  actionUpdateProviderAddressFailed,
  actionAddProviderAddressSuccess,
  actionAddProviderAddressFailed,
} from './actions';

function* getProviderProfile() {
  try {
    const response = yield call(providerAPI.getProviderProfile);

    yield put(actionGetProviderProfileSuccess(response.data.provider));
  } catch (error) {
    yield put(actionGetProviderProfileFailed());
  }
}

function* updateProviderProfile({ payload }) {
  try {
    const { providerData } = payload;

    const response = yield call(providerAPI.updateProviderProfile, providerData);

    yield put(actionUpdateProviderProfileSuccess(response.data.provider));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionUpdateProviderProfileFailed());
  }
}

function* updateProviderPassword({ payload }) {
  try {
    const { newPassword } = payload;

    const response = yield call(providerAPI.updateProviderPassword, newPassword);

    yield put(actionUpdateProviderPasswordSuccess(response.data.provider));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionUpdateProviderPasswordFailed());
  }
}

function* updateProviderAvatar({ payload }) {
  try {
    const { avatar } = payload;

    const response = yield call(providerAPI.updateProviderAvatar, avatar);

    yield put(actionUpdateProviderAvatarSuccess(response.data.provider));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionUpdateProviderAvatarFailed());
  }
}

function* updateProviderAddress({ payload }) {
  try {
    const { addressData } = payload;

    const response = yield call(providerAPI.updateProviderAddress, addressData);

    yield put(actionUpdateProviderAddressSuccess(response.data.addresses));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionUpdateProviderAddressFailed());
  }
}

function* addProviderAddress({ payload }) {
  try {
    const { newAddress } = payload;

    const response = yield call(providerAPI.addProviderAddress, newAddress);

    yield put(actionAddProviderAddressSuccess(response.data.addresses));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionAddProviderAddressFailed());
  }
}

export default function* providerSaga() {
  yield takeLeading(GET_PROVIDER_PROFILE, getProviderProfile);
  yield takeLeading(UPDATE_PROVIDER_PROFILE, updateProviderProfile);
  yield takeLeading(UPDATE_PROVIDER_PASSWORD, updateProviderPassword);
  yield takeLeading(UPDATE_PROVIDER_AVATAR, updateProviderAvatar);
  yield takeLeading(UPDATE_PROVIDER_ADDRESS, updateProviderAddress);
  yield takeLeading(ADD_PROVIDER_ADDRESS, addProviderAddress);
}
