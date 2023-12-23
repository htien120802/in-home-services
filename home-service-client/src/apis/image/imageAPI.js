import axiosClient from 'utils/axios';

const endpoint = '/image/upload';

export default {
  async imageUpload(payload) {
    const path = `${endpoint}`;

    const response = await axiosClient.post(path, payload);

    return response.data;
  },
};
