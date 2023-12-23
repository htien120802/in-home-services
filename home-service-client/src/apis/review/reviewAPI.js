import axiosClient from 'utils/axios';

const customerEndpoint = '/customer';
const publicEndpoint = '/public/service';

export default {
  // GET /customer/service/{serviceId}/review
  async getCustomerServiceReview(serviceId) {
    const path = `${customerEndpoint}/service/${serviceId}/review`;
    const response = await axiosClient.get(path);
    return response.data;
  },

  // POST /customer/service/{serviceId}/review
  async createCustomerServiceReview(serviceId, reviewData) {
    const path = `${customerEndpoint}/service/${serviceId}/review`;
    const response = await axiosClient.post(path, reviewData);
    return response.data;
  },

  // GET /public/service/{serviceId}/review
  async getAllServiceReviews(serviceId) {
    const path = `${publicEndpoint}/${serviceId}/review`;
    const response = await axiosClient.get(path);
    return response.data;
  },
};
