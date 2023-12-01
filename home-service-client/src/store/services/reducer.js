import {
  GET_ALL_SERVICES,
  GET_ALL_SERVICES_SUCCESS,
  GET_ALL_SERVICES_FAILED,

  GET_SERVICE_DETAILS,
  GET_SERVICE_DETAILS_SUCCESS,
  GET_SERVICE_DETAILS_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  services: [],
  service: null,
};

const getAllServices = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_SERVICES:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        services: action.payload,
      };

    case GET_ALL_SERVICES_FAILED:
      return {
        ...state,
        loading: false,
        services: initialState.services,
      };

    case GET_SERVICE_DETAILS:
      return {
        ...state,
        loading: true,
      };

    case GET_SERVICE_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        service: action.payload,
      };

    case GET_SERVICE_DETAILS_FAILED:
      return {
        ...state,
        loading: false,
        service: initialState.service,
      };

    default:
      return state;
  }
};

export default getAllServices;
