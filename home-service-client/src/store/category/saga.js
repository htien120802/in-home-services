import { put, takeLeading, call } from 'redux-saga/effects';

import categoryAPI from 'apis/category/categoryAPI';

import {
  GET_ALL_CATEGORY,
} from './actionTypes';
import {
  actionGetAllCategorySuccess,
  actionGetAllCategoryFailed,
} from './actions';

function* getAllCategory() {
  try {
    const response = yield call(categoryAPI.getAllCategory);

    yield put(actionGetAllCategorySuccess(response.data));
  } catch (error) {
    yield put(actionGetAllCategoryFailed());
  }
}

export default function* categorySaga() {
  yield takeLeading(GET_ALL_CATEGORY, getAllCategory);
}
