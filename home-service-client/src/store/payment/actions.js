import {
  PAYMENT_CALLBACK,
  PAYMENT_CALLBACK_SUCCESS,
  PAYMENT_CALLBACK_FAILED,
} from './actionTypes';

// PAYMENT_CALLBACK
export const actionPaymentCallback = (payload) => ({
  type: PAYMENT_CALLBACK,
  payload,
});

export const actionPaymentCallbackSuccess = (payload) => ({
  type: PAYMENT_CALLBACK_SUCCESS,
  payload,
});

export const actionPaymentCallbackFailed = () => ({
  type: PAYMENT_CALLBACK_FAILED,
});
