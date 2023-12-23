import {
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  accessToken: localStorage.getItem('accessToken') || null,
  refreshToken: null,
};

const register = (state = initialState, action) => {
  switch (action.type) {
    // REGISTER
    case REGISTER:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        accessToken: action.payload.accessToken,
      };

    case REGISTER_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default register;
