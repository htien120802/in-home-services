import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import paymentAPI from 'apis/payment/paymentAPI';

import { PAYMENT_CALLBACK } from './actionTypes';
import {
  actionPaymentCallbackSuccess,
  actionPaymentCallbackFailed,
} from './actions';

function* payment({ payload }) {
  try {
    const { file } = payload;

    const requestBody = {
      file,
    };

    const response = yield call(paymentAPI.getPaymentCallback, requestBody);

    yield put(actionPaymentCallbackSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionPaymentCallbackFailed());
  }
}

export default function* loginSaga() {
  yield takeLeading(PAYMENT_CALLBACK, payment);
}
