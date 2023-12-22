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

// GET_ALL_PROVIDER_SERVICES
export const actionGetAllProviderServices = () => ({
  type: GET_ALL_PROVIDER_SERVICES,
});

export const actionGetAllProviderServicesSuccess = (payload) => ({
  type: GET_ALL_PROVIDER_SERVICES_SUCCESS,
  payload,
});

export const actionGetAllProviderServicesFailed = () => ({
  type: GET_ALL_PROVIDER_SERVICES_FAILED,
});

// UPDATE_PROVIDER_SERVICE
export const actionUpdateProviderService = (serviceData) => ({
  type: UPDATE_PROVIDER_SERVICE,
  payload: serviceData,
});

export const actionUpdateProviderServiceSuccess = (payload) => ({
  type: UPDATE_PROVIDER_SERVICE_SUCCESS,
  payload,
});

export const actionUpdateProviderServiceFailed = () => ({
  type: UPDATE_PROVIDER_SERVICE_FAILED,
});

// REGISTER_PROVIDER_SERVICE
export const actionRegisterProviderService = (serviceData) => ({
  type: REGISTER_PROVIDER_SERVICE,
  payload: serviceData,
});

export const actionRegisterProviderServiceSuccess = (payload) => ({
  type: REGISTER_PROVIDER_SERVICE_SUCCESS,
  payload,
});

export const actionRegisterProviderServiceFailed = () => ({
  type: REGISTER_PROVIDER_SERVICE_FAILED,
});

// ENABLE_OR_DISABLE_PROVIDER_SERVICE
export const actionEnableOrDisableProviderService = (serviceId, action) => ({
  type: ENABLE_OR_DISABLE_PROVIDER_SERVICE,
  payload: { serviceId, action },
});

export const actionEnableOrDisableProviderServiceSuccess = (payload) => ({
  type: ENABLE_OR_DISABLE_PROVIDER_SERVICE_SUCCESS,
  payload,
});

export const actionEnableOrDisableProviderServiceFailed = () => ({
  type: ENABLE_OR_DISABLE_PROVIDER_SERVICE_FAILED,
});

// APPROVE_OR_UNAPPROVE_REGISTER_SERVICE
export const actionApproveOrUnapproveRegisterService = (serviceData) => ({
  type: APPROVE_OR_UNAPPROVE_REGISTER_SERVICE,
  payload: serviceData,
});

export const actionApproveOrUnapproveRegisterServiceSuccess = (payload) => ({
  type: APPROVE_OR_UNAPPROVE_REGISTER_SERVICE_SUCCESS,
  payload,
});

export const actionApproveOrUnapproveRegisterServiceFailed = () => ({
  type: APPROVE_OR_UNAPPROVE_REGISTER_SERVICE_FAILED,
});

// GET_ALL_PUBLIC_SERVICES
export const actionGetAllPublicServices = (payload) => ({
  type: GET_ALL_PUBLIC_SERVICES,
  payload,
});

export const actionGetAllPublicServicesSuccess = (payload) => ({
  type: GET_ALL_PUBLIC_SERVICES_SUCCESS,
  payload,
});

export const actionGetAllPublicServicesFailed = () => ({
  type: GET_ALL_PUBLIC_SERVICES_FAILED,
});

// GET_SERVICE_BY_ID
export const actionGetServiceById = (payload) => ({
  type: GET_SERVICE_BY_ID,
  payload,
});

export const actionGetServiceByIdSuccess = (payload) => ({
  type: GET_SERVICE_BY_ID_SUCCESS,
  payload,
});

export const actionGetServiceByIdFailed = () => ({
  type: GET_SERVICE_BY_ID_FAILED,
});

// GET_PROVIDER_SERVICES_BY_STATUS
export const actionGetProviderServicesByStatus = (status) => ({
  type: GET_PROVIDER_SERVICES_BY_STATUS,
  payload: status,
});

export const actionGetProviderServicesByStatusSuccess = (payload) => ({
  type: GET_PROVIDER_SERVICES_BY_STATUS_SUCCESS,
  payload,
});

export const actionGetProviderServicesByStatusFailed = () => ({
  type: GET_PROVIDER_SERVICES_BY_STATUS_FAILED,
});

// DELETE_PROVIDER_SERVICE
export const actionDeleteProviderService = (serviceId) => ({
  type: DELETE_PROVIDER_SERVICE,
  payload: serviceId,
});

export const actionDeleteProviderServiceSuccess = (payload) => ({
  type: DELETE_PROVIDER_SERVICE_SUCCESS,
  payload,
});

export const actionDeleteProviderServiceFailed = () => ({
  type: DELETE_PROVIDER_SERVICE_FAILED,
});
