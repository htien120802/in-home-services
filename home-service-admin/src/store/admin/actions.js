import {
  GET_ALL_SERVICES,
  GET_ALL_SERVICES_SUCCESS,
  GET_ALL_SERVICES_FAILED,
  UPDATE_SERVICE,
  UPDATE_SERVICE_SUCCESS,
  UPDATE_SERVICE_FAILED,
  CREATE_SERVICE,
  CREATE_SERVICE_SUCCESS,
  CREATE_SERVICE_FAILED,
  UPDATE_PROVIDER_PROFILE,
  UPDATE_PROVIDER_PROFILE_SUCCESS,
  UPDATE_PROVIDER_PROFILE_FAILED,
  DELETE_PROVIDER,
  DELETE_PROVIDER_SUCCESS,
  DELETE_PROVIDER_FAILED,
  UPDATE_CUSTOMER_PROFILE,
  UPDATE_CUSTOMER_PROFILE_SUCCESS,
  UPDATE_CUSTOMER_PROFILE_FAILED,
  DELETE_CUSTOMER,
  DELETE_CUSTOMER_SUCCESS,
  DELETE_CUSTOMER_FAILED,
  GET_ALL_PROVIDERS,
  GET_ALL_PROVIDERS_SUCCESS,
  GET_ALL_PROVIDERS_FAILED,
  CREATE_PROVIDER,
  CREATE_PROVIDER_SUCCESS,
  CREATE_PROVIDER_FAILED,
  GET_ALL_CUSTOMERS,
  GET_ALL_CUSTOMERS_SUCCESS,
  GET_ALL_CUSTOMERS_FAILED,
  CREATE_CUSTOMER,
  CREATE_CUSTOMER_SUCCESS,
  CREATE_CUSTOMER_FAILED,
  GET_SALES_STATISTICS,
  GET_SALES_STATISTICS_SUCCESS,
  GET_SALES_STATISTICS_FAILED,
  GET_QUANTITY_STATISTICS,
  GET_QUANTITY_STATISTICS_SUCCESS,
  GET_QUANTITY_STATISTICS_FAILED,
  GET_ALL_REVIEWS,
  GET_ALL_REVIEWS_SUCCESS,
  GET_ALL_REVIEWS_FAILED,
  GET_REVIEW,
  GET_REVIEW_SUCCESS,
  GET_REVIEW_FAILED,
  DELETE_REVIEW,
  DELETE_REVIEW_SUCCESS,
  DELETE_REVIEW_FAILED,
  GET_ENTITY_COUNT,
  GET_ENTITY_COUNT_SUCCESS,
  GET_ENTITY_COUNT_FAILED,
  GET_ALL_BOOKINGS,
  GET_ALL_BOOKINGS_SUCCESS,
  GET_ALL_BOOKINGS_FAILED,
  GET_BOOKING,
  GET_BOOKING_SUCCESS,
  GET_BOOKING_FAILED,
  DELETE_BOOKING,
  DELETE_BOOKING_SUCCESS,
  DELETE_BOOKING_FAILED,
  DELETE_SERVICE,
  DELETE_SERVICE_SUCCESS,
  DELETE_SERVICE_FAILED,
  DELETE_ADDRESS,
  DELETE_ADDRESS_SUCCESS,
  DELETE_ADDRESS_FAILED,
  APPROVE_OR_UNAPPROVE_REGISTER_SERVICE,
  APPROVE_OR_UNAPPROVE_REGISTER_SERVICE_SUCCESS,
  APPROVE_OR_UNAPPROVE_REGISTER_SERVICE_FAILED,
  GET_COUNT,
  GET_COUNT_SUCCESS,
  GET_COUNT_FAILED,
} from './actionTypes';

// Get all services
export const actionGetAllServices = (payload) => ({
  type: GET_ALL_SERVICES,
  payload,
});

export const actionGetAllServicesSuccess = (payload) => ({
  type: GET_ALL_SERVICES_SUCCESS,
  payload,
});

export const actionGetAllServicesFailed = () => ({
  type: GET_ALL_SERVICES_FAILED,
});

// Update service
export const actionUpdateService = (payload) => ({
  type: UPDATE_SERVICE,
  payload,
});

export const actionUpdateServiceSuccess = (payload) => ({
  type: UPDATE_SERVICE_SUCCESS,
  payload,
});

export const actionUpdateServiceFailed = () => ({
  type: UPDATE_SERVICE_FAILED,
});

// Create service
export const actionCreateService = (payload) => ({
  type: CREATE_SERVICE,
  payload,
});

export const actionCreateServiceSuccess = (payload) => ({
  type: CREATE_SERVICE_SUCCESS,
  payload,
});

export const actionCreateServiceFailed = () => ({
  type: CREATE_SERVICE_FAILED,
});

// Update profile of a provider
export const actionUpdateProviderProfile = (payload) => ({
  type: UPDATE_PROVIDER_PROFILE,
  payload,
});

export const actionUpdateProviderProfileSuccess = (payload) => ({
  type: UPDATE_PROVIDER_PROFILE_SUCCESS,
  payload,
});

export const actionUpdateProviderProfileFailed = () => ({
  type: UPDATE_PROVIDER_PROFILE_FAILED,
});

// Delete a provider
export const actionDeleteProvider = (payload) => ({
  type: DELETE_PROVIDER,
  payload,
});

export const actionDeleteProviderSuccess = (payload) => ({
  type: DELETE_PROVIDER_SUCCESS,
  payload,
});

export const actionDeleteProviderFailed = () => ({
  type: DELETE_PROVIDER_FAILED,
});

// Update profile of a customer
export const actionUpdateCustomerProfile = (payload) => ({
  type: UPDATE_CUSTOMER_PROFILE,
  payload,
});

export const actionUpdateCustomerProfileSuccess = (payload) => ({
  type: UPDATE_CUSTOMER_PROFILE_SUCCESS,
  payload,
});

export const actionUpdateCustomerProfileFailed = () => ({
  type: UPDATE_CUSTOMER_PROFILE_FAILED,
});

// Delete a customer
export const actionDeleteCustomer = (payload) => ({
  type: DELETE_CUSTOMER,
  payload,
});

export const actionDeleteCustomerSuccess = (payload) => ({
  type: DELETE_CUSTOMER_SUCCESS,
  payload,
});

export const actionDeleteCustomerFailed = () => ({
  type: DELETE_CUSTOMER_FAILED,
});

// Get all providers
export const actionGetAllProviders = (payload) => ({
  type: GET_ALL_PROVIDERS,
  payload,
});

export const actionGetAllProvidersSuccess = (payload) => ({
  type: GET_ALL_PROVIDERS_SUCCESS,
  payload,
});

export const actionGetAllProvidersFailed = () => ({
  type: GET_ALL_PROVIDERS_FAILED,
});

// Create a provider
export const actionCreateProvider = (payload) => ({
  type: CREATE_PROVIDER,
  payload,
});

export const actionCreateProviderSuccess = (payload) => ({
  type: CREATE_PROVIDER_SUCCESS,
  payload,
});

export const actionCreateProviderFailed = () => ({
  type: CREATE_PROVIDER_FAILED,
});

// Get all customers
export const actionGetAllCustomers = (payload) => ({
  type: GET_ALL_CUSTOMERS,
  payload,
});

export const actionGetAllCustomersSuccess = (payload) => ({
  type: GET_ALL_CUSTOMERS_SUCCESS,
  payload,
});

export const actionGetAllCustomersFailed = () => ({
  type: GET_ALL_CUSTOMERS_FAILED,
});

// Create a customer
export const actionCreateCustomer = (payload) => ({
  type: CREATE_CUSTOMER,
  payload,
});

export const actionCreateCustomerSuccess = (payload) => ({
  type: CREATE_CUSTOMER_SUCCESS,
  payload,
});

export const actionCreateCustomerFailed = () => ({
  type: CREATE_CUSTOMER_FAILED,
});

// Get all reviews
export const actionGetAllReviews = (payload) => ({
  type: GET_ALL_REVIEWS,
  payload,
});

export const actionGetAllReviewsSuccess = (payload) => ({
  type: GET_ALL_REVIEWS_SUCCESS,
  payload,
});

export const actionGetAllReviewsFailed = () => ({
  type: GET_ALL_REVIEWS_FAILED,
});

// Get a review
export const actionGetReview = (reviewId) => ({
  type: GET_REVIEW,
  payload: reviewId,
});

export const actionGetReviewSuccess = (payload) => ({
  type: GET_REVIEW_SUCCESS,
  payload,
});

export const actionGetReviewFailed = () => ({
  type: GET_REVIEW_FAILED,
});

// Delete a review
export const actionDeleteReview = (reviewId) => ({
  type: DELETE_REVIEW,
  payload: reviewId,
});

export const actionDeleteReviewSuccess = (payload) => ({
  type: DELETE_REVIEW_SUCCESS,
  payload,
});

export const actionDeleteReviewFailed = () => ({
  type: DELETE_REVIEW_FAILED,
});

// Count entity
export const actionGetEntityCount = () => ({
  type: GET_ENTITY_COUNT,
});

export const actionGetEntityCountSuccess = (payload) => ({
  type: GET_ENTITY_COUNT_SUCCESS,
  payload,
});

export const actionGetEntityCountFailed = () => ({
  type: GET_ENTITY_COUNT_FAILED,
});

// Get all bookings
export const actionGetAllBookings = (payload) => ({
  type: GET_ALL_BOOKINGS,
  payload,
});

export const actionGetAllBookingsSuccess = (payload) => ({
  type: GET_ALL_BOOKINGS_SUCCESS,
  payload,
});

export const actionGetAllBookingsFailed = () => ({
  type: GET_ALL_BOOKINGS_FAILED,
});

// Get a booking
export const actionGetBooking = (bookingId) => ({
  type: GET_BOOKING,
  payload: bookingId,
});

export const actionGetBookingSuccess = (payload) => ({
  type: GET_BOOKING_SUCCESS,
  payload,
});

export const actionGetBookingFailed = () => ({
  type: GET_BOOKING_FAILED,
});

// Delete a booking
export const actionDeleteBooking = (bookingId) => ({
  type: DELETE_BOOKING,
  payload: bookingId,
});

export const actionDeleteBookingSuccess = (payload) => ({
  type: DELETE_BOOKING_SUCCESS,
  payload,
});

export const actionDeleteBookingFailed = () => ({
  type: DELETE_BOOKING_FAILED,
});

// Delete a service
export const actionDeleteService = (serviceId) => ({
  type: DELETE_SERVICE,
  payload: serviceId,
});

export const actionDeleteServiceSuccess = (payload) => ({
  type: DELETE_SERVICE_SUCCESS,
  payload,
});

export const actionDeleteServiceFailed = () => ({
  type: DELETE_SERVICE_FAILED,
});

// Delete an address
export const actionDeleteAddress = (addressId) => ({
  type: DELETE_ADDRESS,
  payload: addressId,
});

export const actionDeleteAddressSuccess = (payload) => ({
  type: DELETE_ADDRESS_SUCCESS,
  payload,
});

export const actionDeleteAddressFailed = () => ({
  type: DELETE_ADDRESS_FAILED,
});

// APPROVE_OR_UNAPPROVE_REGISTER_SERVICE
export const actionApproveOrUnapproveRegisterService = (serviceData) => ({
  type: APPROVE_OR_UNAPPROVE_REGISTER_SERVICE,
  payload: serviceData,
});

export const actionApproveOrUnapproveRegisterServiceSuccess = (payload) => ({
  type: APPROVE_OR_UNAPPROVE_REGISTER_SERVICE_SUCCESS,
  payload,
});

export const actionApproveOrUnapproveRegisterServiceFailed = () => ({
  type: APPROVE_OR_UNAPPROVE_REGISTER_SERVICE_FAILED,
});

// Get count
export const actionGetCount = (payload) => ({
  type: GET_COUNT,
  payload,
});

export const actionGetCountSuccess = (payload) => ({
  type: GET_COUNT_SUCCESS,
  payload,
});

export const actionGetCountFailed = () => ({
  type: GET_COUNT_FAILED,
});

// Get sales statistics
export const actionGetSalesStatistics = (payload) => ({
  type: GET_SALES_STATISTICS,
  payload,
});

export const actionGetSalesStatisticsSuccess = (payload) => ({
  type: GET_SALES_STATISTICS_SUCCESS,
  payload,
});

export const actionGetSalesStatisticsFailed = () => ({
  type: GET_SALES_STATISTICS_FAILED,
});

// Get quantity statistics
export const actionGetQuantityStatistics = (payload) => ({
  type: GET_QUANTITY_STATISTICS,
  payload,
});

export const actionGetQuantityStatisticsSuccess = (payload) => ({
  type: GET_QUANTITY_STATISTICS_SUCCESS,
  payload,
});

export const actionGetQuantityStatisticsFailed = () => ({
  type: GET_QUANTITY_STATISTICS_FAILED,
});
