import {
  PAYMENT_CALLBACK,
  PAYMENT_CALLBACK_SUCCESS,
  PAYMENT_CALLBACK_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  image: null,
};

const paymentCallback = (state = initialState, action) => {
  switch (action.type) {
    // PAYMENT_CALLBACK
    case PAYMENT_CALLBACK:
      return {
        ...state,
        loading: true,
      };

    case PAYMENT_CALLBACK_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.payload.image,
      };

    case PAYMENT_CALLBACK_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default paymentCallback;
