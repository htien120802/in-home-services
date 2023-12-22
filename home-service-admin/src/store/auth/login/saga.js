import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import authAPI from 'apis/auth/authAPI';
import { decodeJWT, removeSpacesWithTrim } from 'utils';
import axiosClient from 'utils/axios';

import { LOGIN } from './actionTypes';
import {
  actionLoginSuccess,
  actionLoginFailed,
} from './actions';

function* login({ payload }) {
  try {
    const {
      loginObj: {
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

    if (decodeJWT(response.data.accessToken).role !== "ROLE_ADMIN") {
      toast.error("User not authorized");

      yield put(actionLoginFailed());
      return;
    }

    localStorage.setItem('accessToken', response.data.accessToken);

    yield put(actionLoginSuccess());

    toast.success(response.message);

    axiosClient.defaults.headers.Authorization = `Bearer ${response.data.accessToken}`;

    callback();
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionLoginFailed());
  }
}

export default function* loginSaga() {
  yield takeLeading(LOGIN, login);
}
