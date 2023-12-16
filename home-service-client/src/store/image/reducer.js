import {
  IMAGE_UPLOAD,
  IMAGE_UPLOAD_SUCCESS,
  IMAGE_UPLOAD_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  image: null,
};

const imageUpload = (state = initialState, action) => {
  switch (action.type) {
    // IMAGE_UPLOAD
    case IMAGE_UPLOAD:
      return {
        ...state,
        loading: true,
      };

    case IMAGE_UPLOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        image: action.payload.image,
      };

    case IMAGE_UPLOAD_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default imageUpload;
