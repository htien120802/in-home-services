import {
  REFRESH_TOKEN,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: null,
};

const refreshToken = (state = initialState, action) => {
  switch (action.type) {
    // REFRESH_TOKEN
    case REFRESH_TOKEN:
      return {
        ...state,
        loading: true,
      };

    case REFRESH_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken,
      };

    case REFRESH_TOKEN_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default refreshToken;
