import axiosClient from 'utils/axios';

const paymentEndpoint = '/payment-callback';

export default {
  async getPaymentCallback(payload) {
    const path = `${paymentEndpoint}`;
    const response = await axiosClient.get(path, payload);
    return response.data;
  },
};
