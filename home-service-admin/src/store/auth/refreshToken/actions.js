import {
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
} from './actionTypes';

// REFRESH_TOKEN
export const actionRefreshToken = () => ({
  type: REFRESH_TOKEN,
});

export const actionRefreshTokenSuccess = (payload) => ({
  type: REFRESH_TOKEN_SUCCESS,
  payload,
});

export const actionRefreshTokenFailed = () => ({
  type: REFRESH_TOKEN_FAILED,
});
