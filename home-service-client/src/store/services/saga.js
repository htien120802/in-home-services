import { put, takeLeading, call } from 'redux-saga/effects';

import serviceAPI from 'apis/service/serviceAPI';

import {
  apiErrorHandler,
} from 'utils/index';

import {
  GET_ALL_SERVICES,
  GET_SERVICE_DETAILS,
} from './actionTypes';

import {
  actionGetAllServicesSuccess,
  actionGetAllServicesFailed,

  actionGetServiceDetailsSuccess,
  actionGetServiceDetailsFailed,
} from './actions';

function* getAllServices() {
  try {
    const response = yield serviceAPI.getAllServices();

    yield put(actionGetAllServicesSuccess(response));
  } catch (error) {
    apiErrorHandler(error);

    yield put(actionGetAllServicesFailed());
  }
}

function* getServiceDetails(action) {
  try {
    const response = yield call(serviceAPI.getServiceDetails, { id: action.payload.id });

    yield put(actionGetServiceDetailsSuccess(response.data));
  } catch (error) {
    apiErrorHandler(error);

    yield put(actionGetServiceDetailsFailed());
  }
}

export default function* CamerasSaga() {
  yield takeLeading(GET_ALL_SERVICES, getAllServices);
  yield takeLeading(GET_SERVICE_DETAILS, getServiceDetails);
}
