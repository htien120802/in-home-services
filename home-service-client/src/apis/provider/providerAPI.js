import axiosClient from 'utils/axios';

const providerEndpoint = '/provider';

export default {
  // GET /provider/profile
  async getProviderProfile() {
    const response = await axiosClient.get(`${providerEndpoint}/profile`);
    return response.data;
  },

  // PUT /provider/profile
  async updateProviderProfile(profileData) {
    const response = await axiosClient.put(`${providerEndpoint}/profile`, profileData);
    return response.data;
  },

  // PUT /provider/password
  async updateProviderPassword(passwordData) {
    const response = await axiosClient.put(`${providerEndpoint}/password`, passwordData);
    return response.data;
  },

  // PUT /provider/avatar
  async updateProviderAvatar(avatarData) {
    const response = await axiosClient.put(`${providerEndpoint}/avatar`, avatarData);
    return response.data;
  },

  // PUT /provider/address
  async updateProviderAddress(addressData) {
    const response = await axiosClient.put(`${providerEndpoint}/address`, addressData);
    return response.data;
  },

  // POST /provider/address
  async addProviderAddress(newAddressData) {
    const response = await axiosClient.post(`${providerEndpoint}/address`, newAddressData);
    return response.data;
  },
};
