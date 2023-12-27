/* eslint-disable no-useless-escape */
export const LOCATION = {
  HOME: '/',
  ABOUT: '/about',
  SERVICES: '/services',
  CONTACT: '/contact',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGETPASSWORD: '/forget-password',

  PROFILE: '/profile',
  BOOKING: '/booking',
  CHECKOUT: '/checkout',

  STATISTIC: '/provider/statistic',
  PROVIDERSERVICE: '/provider/services',
  PROVIDERBOOKING: '/provider/bookings',
  PROVIDERPROFILE: '/provider/profile',
  PROVIDERREVIEW: '/provider/reviews',

  ADMINBOOKINGMANAGER: '/admin/booking-manager',
  ADMINPROVIDERMANAGER: '/admin/provider',
  ADMINCUSTOMERMANAGER: '/admin/customer',
  ADMINSERVICEMANAGER: '/admin/services',
  ADMINSTATISTIC: '/admin/statistic',
  ADMINREVIEWMANAGER: '/admin/review',
};

export const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:+\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const TEXT_LENGTH_LIMIT = {
  VERY_SHORT: 25,
  SHORT: 150,
  MEDIUM: 300,
  LONG: 2500,
  PASSWORD: 6,
};

export const SITE_NAME = 'HOME SERVICES';
