import { put, takeLeading, call } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import categoryAPI from 'apis/category/categoryAPI';
import adminAPI from 'apis/admin/adminAPI';

import {
  GET_ALL_CATEGORY,
  CREATE_CATEGORY,
  UPDATE_CATEGORY,
} from './actionTypes';
import {
  actionGetAllCategorySuccess,
  actionGetAllCategoryFailed,
  actionCreateCategorySuccess,
  actionCreateCategoryFailed,
  actionUpdateCategorySuccess,
  actionUpdateCategoryFailed,
} from './actions';

function* getAllCategory() {
  try {
    const response = yield call(categoryAPI.getAllCategory);

    yield put(actionGetAllCategorySuccess(response.data));
  } catch (error) {
    yield put(actionGetAllCategoryFailed());
  }
}

function* createCategory({ payload }) {
  try {
    const { newData, callback } = payload;

    console.log(newData);

    const response = yield call(adminAPI.createCategory, newData);

    yield put(actionCreateCategorySuccess(response.data));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionCreateCategoryFailed());
    toast.error(error.response.data.message);
  }
}

function* updateCategory({ payload }) {
  try {
    const { categoryId, updatedData, callback } = payload;
    console.log(payload);
    const response = yield call(adminAPI.updateCategory, categoryId, updatedData);

    yield put(actionUpdateCategorySuccess(response.data));
    toast.success(response.message);

    if (callback) {
      callback();
    }
  } catch (error) {
    yield put(actionUpdateCategoryFailed());
    toast.error(error.response.data.message);
  }
}

export default function* categorySaga() {
  yield takeLeading(GET_ALL_CATEGORY, getAllCategory);
  yield takeLeading(CREATE_CATEGORY, createCategory);
  yield takeLeading(UPDATE_CATEGORY, updateCategory);
}