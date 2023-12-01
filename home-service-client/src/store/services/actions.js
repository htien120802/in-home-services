import {
  GET_ALL_SERVICES,
  GET_ALL_SERVICES_SUCCESS,
  GET_ALL_SERVICES_FAILED,

  GET_SERVICE_DETAILS,
  GET_SERVICE_DETAILS_SUCCESS,
  GET_SERVICE_DETAILS_FAILED,
} from './actionTypes';

export const actionGetAllServices = () => ({
  type: GET_ALL_SERVICES,
});

export const actionGetAllServicesSuccess = (payload) => ({
  type: GET_ALL_SERVICES_SUCCESS,
  payload,
});

export const actionGetAllServicesFailed = () => ({
  type: GET_ALL_SERVICES_FAILED,
});

export const actionGetServiceDetails = (payload) => ({
  type: GET_SERVICE_DETAILS,
  payload,
});

export const actionGetServiceDetailsSuccess = (payload) => ({
  type: GET_SERVICE_DETAILS_SUCCESS,
  payload,
});

export const actionGetServiceDetailsFailed = () => ({
  type: GET_SERVICE_DETAILS_FAILED,
});
