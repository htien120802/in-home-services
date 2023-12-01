import axiosClient from 'utils/axios';

const endpoint = '/public/service';

export default {
  async getAllServices() {
    const response = await axiosClient.get(endpoint);

    return response.data;
  },
  async getServiceDetails(payload) {
    const path = `${endpoint}/${payload.id}`;

    const response = await axiosClient.get(path, payload);

    return response.data;
  },
};
