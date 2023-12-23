import axiosClient from 'utils/axios';

const endpoint = '/public/category';

export default {
  async getAllCategory() {
    const path = `${endpoint}`;

    const response = await axiosClient.get(path);

    return response.data;
  },
};
