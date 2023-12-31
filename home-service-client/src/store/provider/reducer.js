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
  GET_PROVIDER_SALES_STATISTICS,
  GET_PROVIDER_SALES_STATISTICS_SUCCESS,
  GET_PROVIDER_SALES_STATISTICS_FAILED,
  GET_PROVIDER_QUANTITY_STATISTICS,
  GET_PROVIDER_QUANTITY_STATISTICS_SUCCESS,
  GET_PROVIDER_QUANTITY_STATISTICS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  provider: null,
  salesStatistics: [],
  quantityStatistics: [],
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
    case GET_PROVIDER_SALES_STATISTICS:
    case GET_PROVIDER_QUANTITY_STATISTICS:
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
        provider: action.payload,
      };

    case UPDATE_PROVIDER_ADDRESS_SUCCESS:
    case ADD_PROVIDER_ADDRESS_SUCCESS:
      return {
        ...state,
        loading: false,
        provider: {
          ...state.provider,
          addresses: [action.payload],
        },
      };

    case GET_PROVIDER_SALES_STATISTICS_SUCCESS:
      return {
        ...state,
        loading: false,
        salesStatistics: action.payload,
      };

    case GET_PROVIDER_QUANTITY_STATISTICS_SUCCESS:
      return {
        ...state,
        loading: false,
        quantityStatistics: action.payload,
      };

    case GET_PROVIDER_PROFILE_FAILED:
    case UPDATE_PROVIDER_PROFILE_FAILED:
    case UPDATE_PROVIDER_PASSWORD_FAILED:
    case UPDATE_PROVIDER_AVATAR_FAILED:
    case UPDATE_PROVIDER_ADDRESS_FAILED:
    case ADD_PROVIDER_ADDRESS_FAILED:
    case GET_PROVIDER_SALES_STATISTICS_FAILED:
    case GET_PROVIDER_QUANTITY_STATISTICS_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default providerReducer;
