import axiosClient from 'utils/axios';

const adminEndpoint = '/admin';

export default {
  // GET /admin/count
  async getCount() {
    const path = `${adminEndpoint}/count`;

    const response = await axiosClient.get(path);

    return response.data;
  },

  // GET /admin/statistics/booking/sales
  async getSalesStatisticsByMonthYear({year}) {
    const path = `${adminEndpoint}/statistics/booking/sales`;

    const response = await axiosClient.get(path, {
      params: {
        year,
      },
    });

    return response.data;
  },

  // GET /admin/statistics/booking/quantity
  async getQuantityStatisticsByMonthYear({year}) {
    const path = `${adminEndpoint}/statistics/booking/quantity`;

    const response = await axiosClient.get(path, {
      params: {
        year,
      },
    });

    return response.data;
  },
  // GET /admin/service
  async getAllServices(payload) {
    const path = `${adminEndpoint}/service`;

    const response = await axiosClient.get(path, {
      params: payload,
    });

    return response.data;
  },

  // PUT /admin/service
  async updateService(serviceId, payload) {
    const path = `${adminEndpoint}/service`;

    const response = await axiosClient.put(path, payload);

    return response.data;
  },

  // POST /admin/service
  async createService(payload) {
    const path = `${adminEndpoint}/service`;

    const response = await axiosClient.post(path, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },

  // PUT /admin/provider/{providerId}
  async updateProvider(providerId, payload) {
    const path = `${adminEndpoint}/provider/${providerId}`;

    const response = await axiosClient.put(path, payload, {
      withCredentials: true,
    });

    return response.data;
  },

  // DELETE /admin/provider/{providerId}
  async deleteProvider(providerId) {
    const path = `${adminEndpoint}/provider/${providerId}`;

    const response = await axiosClient.delete(path, {
      withCredentials: true,
    });

    return response.data;
  },

  // PUT /admin/customer/{customerId}
  async updateCustomer(customerId, payload) {
    const path = `${adminEndpoint}/customer/${customerId}`;

    const response = await axiosClient.put(path, payload, {
      withCredentials: true,
    });

    return response.data;
  },

  // DELETE /admin/customer/{customerId}
  async deleteCustomer(customerId) {
    const path = `${adminEndpoint}/customer/${customerId}`;

    const response = await axiosClient.delete(path, {
      withCredentials: true,
    });

    return response.data;
  },

  // GET /admin/provider
  async getAllProviders(payload) {
    const path = `${adminEndpoint}/provider`;

    const response = await axiosClient.get(path, {
      params: payload,
    });

    return response.data;
  },

  // POST /admin/provider
  async createProvider(payload) {
    const path = `${adminEndpoint}/provider`;

    const response = await axiosClient.post(path, payload, {
      withCredentials: true,
    });

    return response.data;
  },

  // GET /admin/customer
  async getAllCustomers(payload) {
    const path = `${adminEndpoint}/customer`;

    const response = await axiosClient.get(path, {
      params: payload,
    });

    return response.data;
  },

  // POST /admin/customer
  async createCustomer(payload) {
    const path = `${adminEndpoint}/customer`;

    const response = await axiosClient.post(path, payload, {
      withCredentials: true,
    });

    return response.data;
  },

  // POST /admin/category
  async createCategory(payload) {
    const path = `${adminEndpoint}/category`;

    const response = await axiosClient.post(path, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },

  // PUT /admin/category/{categoryId}
  async updateCategory(categoryId, payload) {
    const path = `${adminEndpoint}/category/${categoryId}`;

    const response = await axiosClient.post(path, payload, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    return response.data;
  },

  // GET /admin/review
  async getAllReviews(payload) {
    const path = `${adminEndpoint}/review`;

    const response = await axiosClient.get(path, {
      params: payload,
    });

    return response.data;
  },

  // GET /admin/review/{reviewId}
  async getReview(reviewId) {
    const path = `${adminEndpoint}/review/${reviewId}`;

    const response = await axiosClient.get(path, {
      withCredentials: true,
    });

    return response.data;
  },

  // DELETE /admin/review/{reviewId}
  async deleteReview(reviewId) {
    const path = `${adminEndpoint}/review/${reviewId}`;

    const response = await axiosClient.delete(path, {
      withCredentials: true,
    });

    return response.data;
  },

  // GET /admin/count
  async getCount() {
    const path = `${adminEndpoint}/count`;

    const response = await axiosClient.get(path, {
      withCredentials: true,
    });

    return response.data;
  },

  // GET /admin/booking
  async getAllBookings(payload) {
    const path = `${adminEndpoint}/booking`;

    const response = await axiosClient.get(path, {
      params: payload,
    });

    return response.data;
  },

  // GET /admin/booking/{bookingId}
  async getBooking(bookingId) {
    const path = `${adminEndpoint}/booking/${bookingId}`;

    const response = await axiosClient.get(path, {
      withCredentials: true,
    });

    return response.data;
  },

  // DELETE /admin/booking/{bookingId}
  async deleteBooking(bookingId) {
    const path = `${adminEndpoint}/booking/${bookingId}`;

    const response = await axiosClient.delete(path, {
      withCredentials: true,
    });

    return response.data;
  },

  // DELETE /admin/service/{serviceId}
  async deleteService(serviceId) {
    const path = `${adminEndpoint}/service/${serviceId}`;

    const response = await axiosClient.delete(path, {
      withCredentials: true,
    });

    return response.data;
  },

  // DELETE /admin/address/{addressId}
  async deleteAddress(addressId) {
    const path = `${adminEndpoint}/address/${addressId}`;

    const response = await axiosClient.delete(path, {
      withCredentials: true,
    });

    return response.data;
  },

  // PUT /admin/service
  async approveOrUnapproveRegisterService(serviceData) {
    const path = `${adminEndpoint}/service/approve`;

    const response = await axiosClient.put(path, serviceData);
    return response.data;
  },
};
