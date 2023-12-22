import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import serviceAPI from 'apis/service/serviceAPI';

import {
  GET_ALL_PROVIDER_SERVICES,
  UPDATE_PROVIDER_SERVICE,
  REGISTER_PROVIDER_SERVICE,
  ENABLE_OR_DISABLE_PROVIDER_SERVICE,
  APPROVE_OR_UNAPPROVE_REGISTER_SERVICE,
  GET_ALL_PUBLIC_SERVICES,
  GET_SERVICE_BY_ID,
  GET_PROVIDER_SERVICES_BY_STATUS,
  DELETE_PROVIDER_SERVICE,
} from './actionTypes';

import {
  actionGetAllProviderServicesSuccess,
  actionGetAllProviderServicesFailed,
  actionUpdateProviderServiceSuccess,
  actionUpdateProviderServiceFailed,
  actionRegisterProviderServiceSuccess,
  actionRegisterProviderServiceFailed,
  actionEnableOrDisableProviderServiceSuccess,
  actionEnableOrDisableProviderServiceFailed,
  actionApproveOrUnapproveRegisterServiceSuccess,
  actionApproveOrUnapproveRegisterServiceFailed,
  actionGetAllPublicServicesSuccess,
  actionGetAllPublicServicesFailed,
  actionGetServiceByIdSuccess,
  actionGetServiceByIdFailed,
  actionGetProviderServicesByStatusSuccess,
  actionGetProviderServicesByStatusFailed,
  actionDeleteProviderServiceSuccess,
  actionDeleteProviderServiceFailed,
} from './actions';

function* getAllProviderServices() {
  try {
    const response = yield call(serviceAPI.getAllProviderServices);

    yield put(actionGetAllProviderServicesSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllProviderServicesFailed());
  }
}

function* updateProviderService({ payload }) {
  try {
    const { serviceData } = payload;

    const response = yield call(serviceAPI.updateProviderService, serviceData);

    yield put(actionUpdateProviderServiceSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionUpdateProviderServiceFailed());
  }
}

function* registerProviderService({ payload }) {
  try {
    const { serviceData } = payload;

    const response = yield call(serviceAPI.registerToProvideService, serviceData);

    yield put(actionRegisterProviderServiceSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionRegisterProviderServiceFailed());
  }
}

function* enableOrDisableProviderService({ payload }) {
  try {
    const { serviceId, actionType } = payload;

    const response = yield call(serviceAPI.enableOrDisableService, serviceId, actionType);

    yield put(actionEnableOrDisableProviderServiceSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionEnableOrDisableProviderServiceFailed());
  }
}

function* approveOrUnapproveRegisterService({ payload }) {
  try {
    const { serviceData } = payload;

    const response = yield call(serviceAPI.approveOrUnapproveRegisterService, serviceData);

    yield put(actionApproveOrUnapproveRegisterServiceSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionApproveOrUnapproveRegisterServiceFailed());
  }
}

function* getAllPublicServices({ payload }) {
  try {
    const response = yield call(serviceAPI.getAllPublicServices, payload);

    yield put(actionGetAllPublicServicesSuccess(response.data));
  } catch (error) {
    yield put(actionGetAllPublicServicesFailed());
  }
}

function* getServiceById({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(serviceAPI.getServiceById, id);

    yield put(actionGetServiceByIdSuccess(response.data));
  } catch (error) {
    yield put(actionGetServiceByIdFailed());
  }
}

function* getProviderServicesByStatus({ payload }) {
  try {
    const { status } = payload;

    const response = yield call(serviceAPI.getProviderServicesByStatus, status);

    yield put(actionGetProviderServicesByStatusSuccess(response.data));
  } catch (error) {
    yield put(actionGetProviderServicesByStatusFailed());
  }
}

function* deleteProviderService({ payload }) {
  try {
    const { serviceId } = payload;

    const response = yield call(serviceAPI.deleteProviderService, serviceId);

    yield put(actionDeleteProviderServiceSuccess(serviceId));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionDeleteProviderServiceFailed());
  }
}

export default function* serviceSaga() {
  yield takeLeading(GET_ALL_PROVIDER_SERVICES, getAllProviderServices);
  yield takeLeading(UPDATE_PROVIDER_SERVICE, updateProviderService);
  yield takeLeading(REGISTER_PROVIDER_SERVICE, registerProviderService);
  yield takeLeading(ENABLE_OR_DISABLE_PROVIDER_SERVICE, enableOrDisableProviderService);
  yield takeLeading(APPROVE_OR_UNAPPROVE_REGISTER_SERVICE, approveOrUnapproveRegisterService);
  yield takeLeading(GET_ALL_PUBLIC_SERVICES, getAllPublicServices);
  yield takeLeading(GET_SERVICE_BY_ID, getServiceById);
  yield takeLeading(GET_PROVIDER_SERVICES_BY_STATUS, getProviderServicesByStatus);
  yield takeLeading(DELETE_PROVIDER_SERVICE, deleteProviderService);
}
