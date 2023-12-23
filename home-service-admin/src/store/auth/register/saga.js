import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import authAPI from 'apis/auth/authAPI';
import { removeSpacesWithTrim } from 'utils';

import { REGISTER } from './actionTypes';
import {
  actionRegisterSuccess,
  actionRegisterFailed,
} from './actions';

function* register({ payload }) {
  try {
    const {
      values: {
        username,
        email,
        password,
        firstName,
        lastName,
        roleName,
      },

      callback,
    } = payload;

    const newData = removeSpacesWithTrim({
      username,
      email,
      password,
      firstName,
      lastName,
      roleName,
    });

    const response = yield call(authAPI.register, newData);

    const { accessToken, refreshToken } = response.data;

    document.cookie = `refreshToken=${refreshToken}; path=/; secure; HttpOnly`;
    localStorage.setItem('accessToken', accessToken);

    yield put(actionRegisterSuccess({ accessToken, refreshToken }));

    toast.success(response.message);

    callback();
  } catch (error) {
    toast.error(error.response.data);

    yield put(actionRegisterFailed());
  }
}

export default function* registerSaga() {
  yield takeLeading(REGISTER, register);
}
