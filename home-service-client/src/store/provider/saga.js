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
  GET_PROVIDER_SALES_STATISTICS,
  GET_PROVIDER_QUANTITY_STATISTICS,
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
  actionGetProviderSalesStatisticsSuccess,
  actionGetProviderSalesStatisticsFailed,
  actionGetProviderQuantityStatisticsSuccess,
  actionGetProviderQuantityStatisticsFailed,
} from './actions';

function* getProviderProfile() {
  try {
    const response = yield call(providerAPI.getProviderProfile);

    yield put(actionGetProviderProfileSuccess(response.data));
  } catch (error) {
    yield put(actionGetProviderProfileFailed());
  }
}

function* updateProviderProfile({ payload }) {
  try {
    const response = yield call(providerAPI.updateProviderProfile, payload.values);

    yield put(actionUpdateProviderProfileSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionUpdateProviderProfileFailed());
  }
}

function* updateProviderPassword({ payload }) {
  try {
    const { newPassword } = payload;

    const response = yield call(providerAPI.updateProviderPassword, newPassword);

    yield put(actionUpdateProviderPasswordSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionUpdateProviderPasswordFailed());
  }
}

function* updateProviderAvatar({ payload }) {
  try {
    const response = yield call(providerAPI.updateProviderAvatar, payload);

    yield put(actionUpdateProviderAvatarSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionUpdateProviderAvatarFailed());
  }
}

function* updateProviderAddress({ payload }) {
  try {
    const { addressData } = payload;

    const response = yield call(providerAPI.updateProviderAddress, addressData);

    yield put(actionUpdateProviderAddressSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionUpdateProviderAddressFailed());
  }
}

function* addProviderAddress({ payload }) {
  try {
    const { newAddress } = payload;

    const response = yield call(providerAPI.addProviderAddress, newAddress);

    yield put(actionAddProviderAddressSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionAddProviderAddressFailed());
  }
}

function* getProviderSalesStatistics({ payload }) {
  try {
    const response = yield call(providerAPI.getProviderSalesStatistics, payload);

    yield put(actionGetProviderSalesStatisticsSuccess(response.data));
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionGetProviderSalesStatisticsFailed());
  }
}

function* getProviderQuantityStatistics({ payload }) {
  try {
    const response = yield call(providerAPI.getProviderQuantityStatistics, payload);

    yield put(actionGetProviderQuantityStatisticsSuccess(response.data));
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionGetProviderQuantityStatisticsFailed());
  }
}

export default function* providerSaga() {
  yield takeLeading(GET_PROVIDER_PROFILE, getProviderProfile);
  yield takeLeading(UPDATE_PROVIDER_PROFILE, updateProviderProfile);
  yield takeLeading(UPDATE_PROVIDER_PASSWORD, updateProviderPassword);
  yield takeLeading(UPDATE_PROVIDER_AVATAR, updateProviderAvatar);
  yield takeLeading(UPDATE_PROVIDER_ADDRESS, updateProviderAddress);
  yield takeLeading(ADD_PROVIDER_ADDRESS, addProviderAddress);
  yield takeLeading(GET_PROVIDER_SALES_STATISTICS, getProviderSalesStatistics);
  yield takeLeading(GET_PROVIDER_QUANTITY_STATISTICS, getProviderQuantityStatistics);
}
