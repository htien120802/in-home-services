import { toast } from 'react-toastify';
import { put, takeLatest, call } from 'redux-saga/effects';

import authAPI from 'apis/auth/authAPI';
import axiosClient from 'utils/axios';

import { REFRESH_TOKEN } from './actionTypes';
import {
  actionRefreshTokenSuccess,
  actionRefreshTokenFailed,
} from './actions';

function* refreshToken() {
  try {
    const response = yield call(authAPI.refreshToken);

    const { accessToken } = response.data;

    yield put(actionRefreshTokenSuccess({ accessToken }));

    localStorage.setItem('accessToken', accessToken);

    axiosClient.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;
  } catch (error) {
    toast.error(error.response.data);

    yield put(actionRefreshTokenFailed());
  }
}

export default function* refreshTokenSaga() {
  yield takeLatest(REFRESH_TOKEN, refreshToken);
}
