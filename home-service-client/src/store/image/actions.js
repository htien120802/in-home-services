import {
  IMAGE_UPLOAD,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILED,
} from './actionTypes';

// IMAGE_UPLOAD
export const actionImageUpload = (payload) => ({
  type: IMAGE_UPLOAD,
  payload,
});

export const actionImageUploadSuccess = (payload) => ({
  type: IMAGE_UPLOAD_SUCCESS,
  payload,
});

export const actionImageUploadFailed = () => ({
  type: IMAGE_UPLOAD_FAILED,
});
