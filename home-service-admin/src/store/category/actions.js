import {
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,
} from './actionTypes';

// GET_ALL_CATEGORY
export const actionGetAllCategory = () => ({
  type: GET_ALL_CATEGORY,
});

export const actionGetAllCategorySuccess = (payload) => ({
  type: GET_ALL_CATEGORY_SUCCESS,
  payload,
});

export const actionGetAllCategoryFailed = () => ({
  type: GET_ALL_CATEGORY_FAILED,
});
