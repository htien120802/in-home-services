import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import authAPI from 'apis/auth/authAPI';
import { removeSpacesWithTrim } from 'utils';
import axiosClient from 'utils/axios';

import {
  LOGIN, LOGOUT, RESET_PASSWORD,
  RESET_PASSWORD_TOKEN,
} from './actionTypes';
import {
  actionLoginSuccess,
  actionLoginFailed,

  actionLogoutSuccess,
  actionLogoutFailed,

  actionResetPasswordSuccess,
  actionResetPasswordFailed,

  actionResetPasswordTokenSuccess,
  actionResetPasswordTokenFailed,
} from './actions';

function* login({ payload }) {
  try {
    const {
      values: {
        username,
        password,
      },

      callback,
    } = payload;

    const newData = removeSpacesWithTrim({
      username,
      password,
    });

    const response = yield call(authAPI.login, newData);

    localStorage.setItem('accessToken', response.data.accessToken);
    document.cookie = `refreshToken=${response.data.refreshToken}; path=/; secure; HttpOnly`;

    yield put(actionLoginSuccess(response.data));

    toast.success(response.message);

    axiosClient.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;

    callback();
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionLoginFailed());
  }
}

function* logout({ payload }) {
  try {
    const {
      callback,
    } = payload;

    const accessToken = localStorage.getItem('accessToken');
    axiosClient.defaults.headers.Authorization = `Bearer ${accessToken}`;

    yield call(authAPI.logout);

    localStorage.removeItem('accessToken');

    axiosClient.defaults.headers.Authorization = '';

    yield put(actionLogoutSuccess());

    toast.success('Logged out successfully');

    callback();
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionLogoutFailed());
  }
}

function* resetPassword({ payload }) {
  try {
    const response = yield call(authAPI.resetPassword, payload);

    yield put(actionResetPasswordSuccess());

    toast.success(response.data);
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionResetPasswordFailed());
  }
}

function* resetPasswordToken({ payload }) {
  try {
    yield call(authAPI.getResetPasswordToken, payload);

    toast.success('Please check your email');

    yield put(actionResetPasswordTokenSuccess());
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionResetPasswordTokenFailed());
  }
}

export default function* loginSaga() {
  yield takeLeading(LOGIN, login);
  yield takeLeading(LOGOUT, logout);
  yield takeLeading(RESET_PASSWORD, resetPassword);
  yield takeLeading(RESET_PASSWORD_TOKEN, resetPasswordToken);
}
