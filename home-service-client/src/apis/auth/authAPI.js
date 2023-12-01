import axiosClient from 'utils/axios';

const endpoint = '/auth';

export default {
  async login(payload) {
    const path = `${endpoint}/signin`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async register(payload) {
    const path = `${endpoint}/signup`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },

  async refreshToken() {
    const path = `${endpoint}/refresh-token`;

    const response = await axiosClient.post(path);

    return response.data;
  },

  async logout() {
    const path = `${endpoint}/logout`;

    const response = await axiosClient.post(path);

    return response.data;
  },
};
