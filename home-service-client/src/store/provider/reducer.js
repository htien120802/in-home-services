import {
  GET_PROVIDER_PROFILE,
  GET_PROVIDER_PROFILE_SUCCESS,
  GET_PROVIDER_PROFILE_FAILED,
  UPDATE_PROVIDER_PROFILE,
  UPDATE_PROVIDER_PROFILE_SUCCESS,
  UPDATE_PROVIDER_PROFILE_FAILED,
  UPDATE_PROVIDER_PASSWORD,
  UPDATE_PROVIDER_PASSWORD_SUCCESS,
  UPDATE_PROVIDER_PASSWORD_FAILED,
  UPDATE_PROVIDER_AVATAR,
  UPDATE_PROVIDER_AVATAR_SUCCESS,
  UPDATE_PROVIDER_AVATAR_FAILED,
  UPDATE_PROVIDER_ADDRESS,
  UPDATE_PROVIDER_ADDRESS_SUCCESS,
  UPDATE_PROVIDER_ADDRESS_FAILED,
  ADD_PROVIDER_ADDRESS,
  ADD_PROVIDER_ADDRESS_SUCCESS,
  ADD_PROVIDER_ADDRESS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  provider: null,
  addresses: [],
};

const providerReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET_PROVIDER_PROFILE
    case GET_PROVIDER_PROFILE:
    case UPDATE_PROVIDER_PROFILE:
    case UPDATE_PROVIDER_PASSWORD:
    case UPDATE_PROVIDER_AVATAR:
    case UPDATE_PROVIDER_ADDRESS:
    case ADD_PROVIDER_ADDRESS:
      return {
        ...state,
        loading: true,
      };

    case GET_PROVIDER_PROFILE_SUCCESS:
    case UPDATE_PROVIDER_PROFILE_SUCCESS:
    case UPDATE_PROVIDER_PASSWORD_SUCCESS:
    case UPDATE_PROVIDER_AVATAR_SUCCESS:
      return {
        ...state,
        loading: false,
        provider: action.payload.provider,
      };

    case UPDATE_PROVIDER_ADDRESS_SUCCESS:
    case ADD_PROVIDER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        addresses: action.payload.addresses,
      };

    case GET_PROVIDER_PROFILE_FAILED:
    case UPDATE_PROVIDER_PROFILE_FAILED:
    case UPDATE_PROVIDER_PASSWORD_FAILED:
    case UPDATE_PROVIDER_AVATAR_FAILED:
    case UPDATE_PROVIDER_ADDRESS_FAILED:
    case ADD_PROVIDER_ADDRESS_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default providerReducer;
