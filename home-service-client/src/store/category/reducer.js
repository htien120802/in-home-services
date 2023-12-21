import {
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,
} from './actionTypes';

const initialState = {
  loading: false,
  categories: [],
};

const category = (state = initialState, action) => {
  switch (action.type) {
    // GET_ALL_CATEGORY
    case GET_ALL_CATEGORY:
      return {
        ...state,
        loading: true,
      };

    case GET_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        loading: false,
        categories: action.payload,
      };

    case GET_ALL_CATEGORY_FAILED:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default category;
