import {
  GET_CUSTOMER_PROFILE,
  GET_CUSTOMER_PROFILE_SUCCESS,
  GET_CUSTOMER_PROFILE_FAILED,
  UPDATE_CUSTOMER_PROFILE,
  UPDATE_CUSTOMER_PROFILE_SUCCESS,
  UPDATE_CUSTOMER_PROFILE_FAILED,
  UPDATE_CUSTOMER_PASSWORD,
  UPDATE_CUSTOMER_PASSWORD_SUCCESS,
  UPDATE_CUSTOMER_PASSWORD_FAILED,
  UPDATE_CUSTOMER_AVATAR,
  UPDATE_CUSTOMER_AVATAR_SUCCESS,
  UPDATE_CUSTOMER_AVATAR_FAILED,
  UPDATE_CUSTOMER_ADDRESS,
  UPDATE_CUSTOMER_ADDRESS_SUCCESS,
  UPDATE_CUSTOMER_ADDRESS_FAILED,
  ADD_CUSTOMER_ADDRESS,
  ADD_CUSTOMER_ADDRESS_SUCCESS,
  ADD_CUSTOMER_ADDRESS_FAILED,
} from './actionTypes';

// GET_CUSTOMER_PROFILE
export const actionGetCustomerProfile = (payload) => ({
  type: GET_CUSTOMER_PROFILE,
  payload,
});

export const actionGetCustomerProfileSuccess = (payload) => ({
  type: GET_CUSTOMER_PROFILE_SUCCESS,
  payload,
});

export const actionGetCustomerProfileFailed = () => ({
  type: GET_CUSTOMER_PROFILE_FAILED,
});

// UPDATE_CUSTOMER_PROFILE
export const actionUpdateCustomerProfile = (payload) => ({
  type: UPDATE_CUSTOMER_PROFILE,
  payload,
});

export const actionUpdateCustomerProfileSuccess = (payload) => ({
  type: UPDATE_CUSTOMER_PROFILE_SUCCESS,
  payload,
});

export const actionUpdateCustomerProfileFailed = () => ({
  type: UPDATE_CUSTOMER_PROFILE_FAILED,
});

// UPDATE_CUSTOMER_PASSWORD
export const actionUpdateCustomerPassword = (passwordData) => ({
  type: UPDATE_CUSTOMER_PASSWORD,
  payload: passwordData,
});

export const actionUpdateCustomerPasswordSuccess = (payload) => ({
  type: UPDATE_CUSTOMER_PASSWORD_SUCCESS,
  payload,
});

export const actionUpdateCustomerPasswordFailed = () => ({
  type: UPDATE_CUSTOMER_PASSWORD_FAILED,
});

// UPDATE_CUSTOMER_AVATAR
export const actionUpdateCustomerAvatar = (avatarData) => ({
  type: UPDATE_CUSTOMER_AVATAR,
  payload: avatarData,
});

export const actionUpdateCustomerAvatarSuccess = (payload) => ({
  type: UPDATE_CUSTOMER_AVATAR_SUCCESS,
  payload,
});

export const actionUpdateCustomerAvatarFailed = () => ({
  type: UPDATE_CUSTOMER_AVATAR_FAILED,
});

// UPDATE_CUSTOMER_ADDRESS
export const actionUpdateCustomerAddress = (addressData) => ({
  type: UPDATE_CUSTOMER_ADDRESS,
  payload: addressData,
});

export const actionUpdateCustomerAddressSuccess = (payload) => ({
  type: UPDATE_CUSTOMER_ADDRESS_SUCCESS,
  payload,
});

export const actionUpdateCustomerAddressFailed = () => ({
  type: UPDATE_CUSTOMER_ADDRESS_FAILED,
});

// ADD_CUSTOMER_ADDRESS
export const actionAddCustomerAddress = (newAddressData) => ({
  type: ADD_CUSTOMER_ADDRESS,
  payload: newAddressData,
});

export const actionAddCustomerAddressSuccess = (payload) => ({
  type: ADD_CUSTOMER_ADDRESS_SUCCESS,
  payload,
});

export const actionAddCustomerAddressFailed = () => ({
  type: ADD_CUSTOMER_ADDRESS_FAILED,
});
