import {
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from './actionTypes';

// LOGOUT
export const actionLogout = () => ({
  type: LOGOUT,
});

export const actionLogoutSuccess = () => ({
  type: LOGOUT_SUCCESS,
});

export const actionLogoutFailed = () => ({
  type: LOGOUT_FAILED,
});
