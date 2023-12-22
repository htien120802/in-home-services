import { toast } from 'react-toastify';
import { put, takeLeading, call } from 'redux-saga/effects';

import imageAPI from 'apis/image/imageAPI';

import { IMAGE_UPLOAD } from './actionTypes';
import {
  actionImageUploadSuccess,
  actionImageUploadFailed,
} from './actions';

function* image({ payload }) {
  try {
    const response = yield call(imageAPI.imageUpload, payload);

    yield put(actionImageUploadSuccess(response.data));

    if (response.status === 'success') {
      toast.success(response.message);
    } else {
      toast.error(response.message);
    }
  } catch (error) {
    toast.error(error.response.data.message);

    yield put(actionImageUploadFailed());
  }
}

export default function* imageSaga() {
  yield takeLeading(IMAGE_UPLOAD, image);
}
