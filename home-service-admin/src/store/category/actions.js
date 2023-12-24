import {
  GET_ALL_CATEGORY,
  GET_ALL_CATEGORY_SUCCESS,
  GET_ALL_CATEGORY_FAILED,
  CREATE_CATEGORY,
  CREATE_CATEGORY_SUCCESS,
  CREATE_CATEGORY_FAILED,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_CATEGORY_FAILED,
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

// Create a category
export const actionCreateCategory = (payload) => ({
  type: CREATE_CATEGORY,
  payload,
});

export const actionCreateCategorySuccess = (payload) => ({
  type: CREATE_CATEGORY_SUCCESS,
  payload,
});

export const actionCreateCategoryFailed = () => ({
  type: CREATE_CATEGORY_FAILED,
});

// Update a category
export const actionUpdateCategory = (payload) => ({
  type: UPDATE_CATEGORY,
  payload,
});

export const actionUpdateCategorySuccess = (payload) => ({
  type: UPDATE_CATEGORY_SUCCESS,
  payload,
});

export const actionUpdateCategoryFailed = () => ({
  type: UPDATE_CATEGORY_FAILED,
});