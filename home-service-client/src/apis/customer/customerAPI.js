import axiosClient from 'utils/axios';

const customerEndpoint = '/customer';

export default {
  // GET /customer/profile
  async getCustomerProfile() {
    const response = await axiosClient.get(`${customerEndpoint}/profile`);
    return response.data;
  },

  // PUT /customer/profile
  async updateCustomerProfile(profileData) {
    const response = await axiosClient.put(`${customerEndpoint}/profile`, profileData);
    return response.data;
  },

  // PUT /customer/password
  async updateCustomerPassword(passwordData) {
    const response = await axiosClient.put(`${customerEndpoint}/password`, passwordData);
    return response.data;
  },

  // PUT /customer/avatar
  async updateCustomerAvatar(avatarData) {
    const response = await axiosClient.put(`${customerEndpoint}/avatar`, avatarData);
    return response.data;
  },

  // PUT /customer/address
  async updateCustomerAddress(addressData) {
    const response = await axiosClient.put(`${customerEndpoint}/address`, addressData);
    return response.data;
  },

  // POST /customer/address
  async addCustomerAddress(newAddressData) {
    const response = await axiosClient.post(`${customerEndpoint}/address`, newAddressData);
    return response.data;
  },
};
