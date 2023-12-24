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

const initialState = {
  loading: false,
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: null,
};

const login = (state = initialState, action) => {
  switch (action.type) {
    // LOGIN
    case LOGIN:
      return {
        ...state,
        loading: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken,
      };

    case LOGIN_FAILED:
      return {
        ...state,
        loading: false,
      };

    case LOGOUT:
      return {
        ...state,
        loading: true,
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: null,
        refreshToken: null,
      };

    case LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
      };

      // REFRESH TOKEN
    case REFRESH_TOKEN:
      return {
        ...state,
        loading: true,
      };

    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case REFRESH_TOKEN_FAILED:
      return {
        ...state,
        loading: false,
      };

    case RESET_PASSWORD_TOKEN:
      return {
        ...state,
        loading: true,
      };

    case RESET_PASSWORD_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case RESET_PASSWORD_TOKEN_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default login;
