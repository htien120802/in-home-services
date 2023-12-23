// Import necessary modules
import axiosClient from 'utils/axios';

const publicEndpoint = '/public/service';
const adminEndpoint = '/admin/service';
const providerEndpoint = '/provider/service';

export default {
  // GET /provider/service
  async getAllProviderServices() {
    const response = await axiosClient.get(providerEndpoint);
    return response.data;
  },

  // PUT /provider/service
  async updateProviderService(serviceData) {
    const response = await axiosClient.put(providerEndpoint, serviceData);
    return response.data;
  },

  // POST /provider/service
  async registerToProvideService(serviceData) {
    const response = await axiosClient.post(providerEndpoint, serviceData, {
      headers: {
        'Content-Type': 'multipart/form-data', // Set the correct Content-Type for file upload
      },
    });
    return response.data;
  },

  // PUT /provider/service/{id}/{action}
  async enableOrDisableService(id, action) {
    const path = `${providerEndpoint}/${id}/${action}`;
    const response = await axiosClient.put(path);
    return response.data;
  },

  // PUT /admin/service
  async approveOrUnapproveRegisterService(serviceData) {
    const response = await axiosClient.put(adminEndpoint, serviceData);
    return response.data;
  },

  // GET /public/service
  async getAllPublicServices(payload) {
    const {
      pageNumber = '', size = '', sortBy = '', sortDirection = '', name = '', categorySlug = '',
    } = payload || {};

    const params = {};

    if (pageNumber !== '') {
      params.pageNumber = pageNumber;
    }

    if (size !== '') {
      params.size = size;
    }

    if (sortBy !== '') {
      params.sortBy = sortBy;
    }

    if (sortDirection !== '') {
      params.sortDirection = sortDirection;
    }

    if (name !== '') {
      params.name = name;
    }

    if (categorySlug !== '') {
      params.categorySlug = categorySlug;
    }

    const response = await axiosClient.get(publicEndpoint, {
      params,
    });
    return response.data;
  },

  // GET /public/service/{id}
  async getServiceById(id) {
    const path = `${publicEndpoint}/${id}`;
    const response = await axiosClient.get(path);
    return response.data;
  },

  // GET /admin/service/{status}
  async getProviderServicesByStatus(status) {
    const path = `${adminEndpoint}/${status}`;
    const response = await axiosClient.get(path);
    return response.data;
  },

  // DELETE /provider/service/{id}
  async deleteProviderService(id) {
    const path = `${providerEndpoint}/${id}`;
    const response = await axiosClient.delete(path);
    return response.data;
  },
};
