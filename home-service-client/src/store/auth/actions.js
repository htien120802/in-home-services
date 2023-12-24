import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILED,

  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,

  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,

  RESET_PASSWORD_TOKEN,
  RESET_PASSWORD_TOKEN_SUCCESS,
  RESET_PASSWORD_TOKEN_FAILED,
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

// REFRESH TOKEN
export const actionResetPassword = (payload) => ({
  type: REFRESH_TOKEN,
  payload,
});

export const actionResetPasswordSuccess = (payload) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload,
});

export const actionResetPasswordFailed = () => ({
  type: REFRESH_TOKEN_FAILED,
});

// RESET PASSWORD TOKEN
export const actionResetPasswordToken = (payload) => ({
  type: RESET_PASSWORD_TOKEN,
  payload,
});

export const actionResetPasswordTokenSuccess = () => ({
  type: RESET_PASSWORD_TOKEN_SUCCESS,
});

export const actionResetPasswordTokenFailed = () => ({
  type: RESET_PASSWORD_TOKEN_FAILED,
});
