import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from './actionTypes';

// LOGIN
export const actionLogin = (payload) => ({
  type: LOGIN,
  payload,
});

export const actionLoginSuccess = (payload) => ({
  type: LOGIN_SUCCESS,
  payload,
});

export const actionLoginFailed = () => ({
  type: LOGIN_FAILED,
});

// LOGOUT
export const actionLogout = (payload) => ({
  type: LOGOUT,
  payload,
});

export const actionLogoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const actionLogoutFailed = () => ({
  type: LOGOUT_FAILED,
});
