import {
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  accessToken: null,
  refreshToken: null,
};

const logout = (state = initialState, action) => {
  switch (action.type) {
    // LOGOUT
    case LOGOUT:
      return {
        ...state,
        loading: true,
      };

    case LOGOUT_SUCCESS:
    case LOGOUT_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default logout;
