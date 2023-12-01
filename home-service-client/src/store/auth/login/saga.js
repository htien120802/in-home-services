import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import authAPI from 'apis/auth/authAPI';
import { removeSpacesWithTrim } from 'utils';
import axiosClient from 'utils/axios';

import { LOGIN } from './actionTypes';
import {
  actionLoginSuccess,
  actionLoginFailed,
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
    localStorage.setItem('accessTokenExpirationTime', 24 * 60 * 60 * 1000);

    yield put(actionLoginSuccess(response.data));

    toast.success(response.message);

    axiosClient.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;

    callback();
  } catch (error) {
    toast.error(error.message);

    yield put(actionLoginFailed());
  }
}

export default function* loginSaga() {
  yield takeLeading(LOGIN, login);
}
