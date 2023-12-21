import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import reviewAPI from 'apis/review/reviewAPI';

import {
  GET_CUSTOMER_SERVICE_REVIEW,
  CREATE_CUSTOMER_SERVICE_REVIEW,
  GET_ALL_SERVICE_REVIEWS,
} from './actionTypes';

import {
  actionGetCustomerServiceReviewSuccess,
  actionGetCustomerServiceReviewFailed,
  actionCreateCustomerServiceReviewSuccess,
  actionCreateCustomerServiceReviewFailed,
  actionGetAllServiceReviewsSuccess,
  actionGetAllServiceReviewsFailed,
} from './actions';

function* getCustomerServiceReview({ payload }) {
  try {
    const { serviceId } = payload;

    const response = yield call(reviewAPI.getCustomerServiceReview, serviceId);

    yield put(actionGetCustomerServiceReviewSuccess(response.data.reviews));
  } catch (error) {
    yield put(actionGetCustomerServiceReviewFailed());
  }
}

function* createCustomerServiceReview({ payload }) {
  try {
    const { serviceId, reviewData } = payload;

    const response = yield call(reviewAPI.createCustomerServiceReview, serviceId, reviewData);

    yield put(actionCreateCustomerServiceReviewSuccess(response.data.review));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.message);

    yield put(actionCreateCustomerServiceReviewFailed());
  }
}

function* getAllServiceReviews({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(reviewAPI.getAllServiceReviews, id);

    yield put(actionGetAllServiceReviewsSuccess(response.data.reviews));
  } catch (error) {
    yield put(actionGetAllServiceReviewsFailed());
  }
}

export default function* reviewSaga() {
  yield takeLeading(GET_CUSTOMER_SERVICE_REVIEW, getCustomerServiceReview);
  yield takeLeading(CREATE_CUSTOMER_SERVICE_REVIEW, createCustomerServiceReview);
  yield takeLeading(GET_ALL_SERVICE_REVIEWS, getAllServiceReviews);
}
