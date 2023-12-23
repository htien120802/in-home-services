import {
  GET_ALL_PROVIDER_SERVICES,
  GET_ALL_PROVIDER_SERVICES_SUCCESS,
  GET_ALL_PROVIDER_SERVICES_FAILED,
  UPDATE_PROVIDER_SERVICE,
  UPDATE_PROVIDER_SERVICE_SUCCESS,
  UPDATE_PROVIDER_SERVICE_FAILED,
  REGISTER_PROVIDER_SERVICE,
  REGISTER_PROVIDER_SERVICE_SUCCESS,
  REGISTER_PROVIDER_SERVICE_FAILED,
  ENABLE_OR_DISABLE_PROVIDER_SERVICE,
  ENABLE_OR_DISABLE_PROVIDER_SERVICE_SUCCESS,
  ENABLE_OR_DISABLE_PROVIDER_SERVICE_FAILED,
  APPROVE_OR_UNAPPROVE_REGISTER_SERVICE,
  APPROVE_OR_UNAPPROVE_REGISTER_SERVICE_SUCCESS,
  APPROVE_OR_UNAPPROVE_REGISTER_SERVICE_FAILED,
  GET_ALL_PUBLIC_SERVICES,
  GET_ALL_PUBLIC_SERVICES_SUCCESS,
  GET_ALL_PUBLIC_SERVICES_FAILED,
  GET_SERVICE_BY_ID,
  GET_SERVICE_BY_ID_SUCCESS,
  GET_SERVICE_BY_ID_FAILED,
  GET_PROVIDER_SERVICES_BY_STATUS,
  GET_PROVIDER_SERVICES_BY_STATUS_SUCCESS,
  GET_PROVIDER_SERVICES_BY_STATUS_FAILED,
  DELETE_PROVIDER_SERVICE,
  DELETE_PROVIDER_SERVICE_SUCCESS,
  DELETE_PROVIDER_SERVICE_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  providerServices: [],
  publicServices: [],
  serviceDetails: null,
};

const serviceReducer = (state = initialState, action) => {
  switch (action.type) {
    // GET_ALL_PROVIDER_SERVICES
    case GET_ALL_PROVIDER_SERVICES:
    case UPDATE_PROVIDER_SERVICE:
    case REGISTER_PROVIDER_SERVICE:
    case ENABLE_OR_DISABLE_PROVIDER_SERVICE:
    case APPROVE_OR_UNAPPROVE_REGISTER_SERVICE:
    case GET_ALL_PUBLIC_SERVICES:
    case GET_SERVICE_BY_ID:
    case GET_PROVIDER_SERVICES_BY_STATUS:
    case DELETE_PROVIDER_SERVICE:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_PROVIDER_SERVICES_SUCCESS:
    case APPROVE_OR_UNAPPROVE_REGISTER_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        providerServices: action.payload,
      };

    case UPDATE_PROVIDER_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        providerServices: state.providerServices.map((service) => (service.id === action.payload.id ? { ...service, ...action.payload } : service)),
      };

    case ENABLE_OR_DISABLE_PROVIDER_SERVICE_SUCCESS:
    {
      const updatedServices = state.providerServices.map((service) => (service.id === action.payload.serviceId
        ? { ...service, status: action.payload.actionType === 'disable' ? 'DISABLE' : 'APPROVED' }
        : service));

      return {
        ...state,
        loading: false,
        providerServices: updatedServices,
      };
    }

    case REGISTER_PROVIDER_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        providerServices: [...state.providerServices, action.payload],
      };

    case GET_ALL_PUBLIC_SERVICES_SUCCESS:
      return {
        ...state,
        loading: false,
        publicServices: action.payload,
      };

    case GET_SERVICE_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        serviceDetails: action.payload,
      };

    case GET_PROVIDER_SERVICES_BY_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        providerServices: action.payload,
      };

    case DELETE_PROVIDER_SERVICE_SUCCESS:
      return {
        ...state,
        loading: false,
        providerServices: state.providerServices.filter(
          (service) => service.id !== action.payload,
        ),
      };

    case GET_ALL_PROVIDER_SERVICES_FAILED:
    case UPDATE_PROVIDER_SERVICE_FAILED:
    case REGISTER_PROVIDER_SERVICE_FAILED:
    case ENABLE_OR_DISABLE_PROVIDER_SERVICE_FAILED:
    case APPROVE_OR_UNAPPROVE_REGISTER_SERVICE_FAILED:
    case GET_ALL_PUBLIC_SERVICES_FAILED:
    case GET_SERVICE_BY_ID_FAILED:
    case GET_PROVIDER_SERVICES_BY_STATUS_FAILED:
    case DELETE_PROVIDER_SERVICE_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default serviceReducer;
