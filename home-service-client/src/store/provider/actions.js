import {
  GET_PROVIDER_PROFILE,
  GET_PROVIDER_PROFILE_SUCCESS,
  GET_PROVIDER_PROFILE_FAILED,
  UPDATE_PROVIDER_PROFILE,
  UPDATE_PROVIDER_PROFILE_SUCCESS,
  UPDATE_PROVIDER_PROFILE_FAILED,
  UPDATE_PROVIDER_PASSWORD,
  UPDATE_PROVIDER_PASSWORD_SUCCESS,
  UPDATE_PROVIDER_PASSWORD_FAILED,
  UPDATE_PROVIDER_AVATAR,
  UPDATE_PROVIDER_AVATAR_SUCCESS,
  UPDATE_PROVIDER_AVATAR_FAILED,
  UPDATE_PROVIDER_ADDRESS,
  UPDATE_PROVIDER_ADDRESS_SUCCESS,
  UPDATE_PROVIDER_ADDRESS_FAILED,
  ADD_PROVIDER_ADDRESS,
  ADD_PROVIDER_ADDRESS_SUCCESS,
  ADD_PROVIDER_ADDRESS_FAILED,
  GET_PROVIDER_SALES_STATISTICS,
  GET_PROVIDER_SALES_STATISTICS_SUCCESS,
  GET_PROVIDER_SALES_STATISTICS_FAILED,
  GET_PROVIDER_QUANTITY_STATISTICS,
  GET_PROVIDER_QUANTITY_STATISTICS_SUCCESS,
  GET_PROVIDER_QUANTITY_STATISTICS_FAILED,
} from './actionTypes';

// GET_PROVIDER_PROFILE
export const actionGetProviderProfile = () => ({
  type: GET_PROVIDER_PROFILE,
});

export const actionGetProviderProfileSuccess = (payload) => ({
  type: GET_PROVIDER_PROFILE_SUCCESS,
  payload,
});

export const actionGetProviderProfileFailed = () => ({
  type: GET_PROVIDER_PROFILE_FAILED,
});

// UPDATE_PROVIDER_PROFILE
export const actionUpdateProviderProfile = (profileData) => ({
  type: UPDATE_PROVIDER_PROFILE,
  payload: profileData,
});

export const actionUpdateProviderProfileSuccess = (payload) => ({
  type: UPDATE_PROVIDER_PROFILE_SUCCESS,
  payload,
});

export const actionUpdateProviderProfileFailed = () => ({
  type: UPDATE_PROVIDER_PROFILE_FAILED,
});

// UPDATE_PROVIDER_PASSWORD
export const actionUpdateProviderPassword = (passwordData) => ({
  type: UPDATE_PROVIDER_PASSWORD,
  payload: passwordData,
});

export const actionUpdateProviderPasswordSuccess = (payload) => ({
  type: UPDATE_PROVIDER_PASSWORD_SUCCESS,
  payload,
});

export const actionUpdateProviderPasswordFailed = () => ({
  type: UPDATE_PROVIDER_PASSWORD_FAILED,
});

// UPDATE_PROVIDER_AVATAR
export const actionUpdateProviderAvatar = (avatarData) => ({
  type: UPDATE_PROVIDER_AVATAR,
  payload: avatarData,
});

export const actionUpdateProviderAvatarSuccess = (payload) => ({
  type: UPDATE_PROVIDER_AVATAR_SUCCESS,
  payload,
});

export const actionUpdateProviderAvatarFailed = () => ({
  type: UPDATE_PROVIDER_AVATAR_FAILED,
});

// UPDATE_PROVIDER_ADDRESS
export const actionUpdateProviderAddress = (addressData) => ({
  type: UPDATE_PROVIDER_ADDRESS,
  payload: addressData,
});

export const actionUpdateProviderAddressSuccess = (payload) => ({
  type: UPDATE_PROVIDER_ADDRESS_SUCCESS,
  payload,
});

export const actionUpdateProviderAddressFailed = () => ({
  type: UPDATE_PROVIDER_ADDRESS_FAILED,
});

// ADD_PROVIDER_ADDRESS
export const actionAddProviderAddress = (newAddressData) => ({
  type: ADD_PROVIDER_ADDRESS,
  payload: newAddressData,
});

export const actionAddProviderAddressSuccess = (payload) => ({
  type: ADD_PROVIDER_ADDRESS_SUCCESS,
  payload,
});

export const actionAddProviderAddressFailed = () => ({
  type: ADD_PROVIDER_ADDRESS_FAILED,
});

export const actionGetProviderSalesStatistics = (payload) => ({
  type: GET_PROVIDER_SALES_STATISTICS,
  payload,
});

export const actionGetProviderSalesStatisticsSuccess = (payload) => ({
  type: GET_PROVIDER_SALES_STATISTICS_SUCCESS,
  payload,
});

export const actionGetProviderSalesStatisticsFailed = () => ({
  type: GET_PROVIDER_SALES_STATISTICS_FAILED,
});

// GET_PROVIDER_QUANTITY_STATISTICS
export const actionGetProviderQuantityStatistics = (payload) => ({
  type: GET_PROVIDER_QUANTITY_STATISTICS,
  payload,
});

export const actionGetProviderQuantityStatisticsSuccess = (payload) => ({
  type: GET_PROVIDER_QUANTITY_STATISTICS_SUCCESS,
  payload,
});

export const actionGetProviderQuantityStatisticsFailed = () => ({
  type: GET_PROVIDER_QUANTITY_STATISTICS_FAILED,
});
