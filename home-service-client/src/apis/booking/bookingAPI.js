import axiosClient from 'utils/axios';

const providerEndpoint = '/provider/booking';
const customerEndpoint = '/customer/booking';

export default {
  // PUT /provider/booking/{bookingId}/status
  async updateBookingStatus(bookingId, newStatus) {
    const path = `${providerEndpoint}/${bookingId}/status`;
    const response = await axiosClient.put(path, { status: newStatus });
    return response.data;
  },

  // PUT /provider/booking/{bookingId}/cancel
  async providerCancelBooking(bookingId) {
    const path = `${providerEndpoint}/${bookingId}/cancel`;
    const response = await axiosClient.put(path);
    return response.data;
  },

  // PUT /customer/booking/{bookingId}/cancel
  async customerCancelBooking(payload) {
    const path = `${customerEndpoint}/${payload.bookingId}/cancel`;
    const response = await axiosClient.put(path, null, {
      params: {
        reason: payload.reason,
      },
    });
    return response.data;
  },

  // GET /customer/booking
  async getAllCustomerBookings() {
    const response = await axiosClient.get(customerEndpoint);
    return response.data;
  },

  // GET /customer/booking
  async getAllProviderBookings() {
    const response = await axiosClient.get(providerEndpoint);
    return response.data;
  },

  // POST /customer/booking
  async createBooking(bookingData) {
    const response = await axiosClient.post(customerEndpoint, bookingData);
    return response.data;
  },

  // POST /customer/booking/calc
  async createBookingCalculate(bookingData) {
    const response = await axiosClient.post(`${customerEndpoint}/calc`, bookingData);
    return response.data;
  },

  // GET /customer/booking/{status}
  async getCustomerBookingsByStatus(status) {
    const path = `${customerEndpoint}/${status}`;
    const response = await axiosClient.get(path);
    return response.data;
  },

  // GET /provider/booking/{bookingId}
  async getProviderBooking(bookingId) {
    const path = `${providerEndpoint}/${bookingId}`;
    const response = await axiosClient.get(path);
    return response.data;
  },

  // GET /customer/booking/{bookingId}
  async getCustomerBooking(bookingId) {
    const path = `${customerEndpoint}/${bookingId}`;
    const response = await axiosClient.get(path);
    return response.data;
  },
};