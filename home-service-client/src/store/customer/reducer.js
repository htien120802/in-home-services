import {
  GET_CUSTOMER_PROFILE,
  GET_CUSTOMER_PROFILE_SUCCESS,
  GET_CUSTOMER_PROFILE_FAILED,
  UPDATE_CUSTOMER_PROFILE,
  UPDATE_CUSTOMER_PROFILE_SUCCESS,
  UPDATE_CUSTOMER_PROFILE_FAILED,
  UPDATE_CUSTOMER_PASSWORD,
  UPDATE_CUSTOMER_PASSWORD_SUCCESS,
  UPDATE_CUSTOMER_PASSWORD_FAILED,
  UPDATE_CUSTOMER_AVATAR,
  UPDATE_CUSTOMER_AVATAR_SUCCESS,
  UPDATE_CUSTOMER_AVATAR_FAILED,
  UPDATE_CUSTOMER_ADDRESS,
  UPDATE_CUSTOMER_ADDRESS_SUCCESS,
  UPDATE_CUSTOMER_ADDRESS_FAILED,
  ADD_CUSTOMER_ADDRESS,
  ADD_CUSTOMER_ADDRESS_SUCCESS,
  ADD_CUSTOMER_ADDRESS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  customer: null,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET_CUSTOMER_PROFILE
    case GET_CUSTOMER_PROFILE:
    case UPDATE_CUSTOMER_PROFILE:
    case UPDATE_CUSTOMER_PASSWORD:
    case UPDATE_CUSTOMER_AVATAR:
    case UPDATE_CUSTOMER_ADDRESS:
    case ADD_CUSTOMER_ADDRESS:
      return {
        ...state,
        loading: true,
      };

    case GET_CUSTOMER_PROFILE_SUCCESS:
    case UPDATE_CUSTOMER_PROFILE_SUCCESS:
    case UPDATE_CUSTOMER_PASSWORD_SUCCESS:
    case UPDATE_CUSTOMER_AVATAR_SUCCESS:
      return {
        ...state,
        loading: false,
        customer: action.payload,
      };

    case UPDATE_CUSTOMER_ADDRESS_SUCCESS:
    case ADD_CUSTOMER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        addresses: action.payload.addresses,
      };

    case GET_CUSTOMER_PROFILE_FAILED:
    case UPDATE_CUSTOMER_PROFILE_FAILED:
    case UPDATE_CUSTOMER_PASSWORD_FAILED:
    case UPDATE_CUSTOMER_AVATAR_FAILED:
    case UPDATE_CUSTOMER_ADDRESS_FAILED:
    case ADD_CUSTOMER_ADDRESS_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default customerReducer;
