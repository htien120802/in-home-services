import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import { LOCATION } from 'constants/index';

import Home from 'pages/Home/HomePage';
import Layout from 'layout/Layout';
import AboutPage from 'pages/About/AboutPage';
import Services from 'pages/Services/ServicesPage';
import ServiceDetails from 'pages/Service/ServiceDetails';
import ContactPage from 'pages/Contact/ContactPage';

import LoginPage from 'pages/Login/LoginPage';
import RegisterPage from 'pages/Register/RegisterPage';

import checkAuth from './auth';

import ProfilePage from 'pages/Profile/ProfilePage';
import BookingPage from 'pages/Booking/BookingPage';
import BookingManagerPage from 'pages/Provider/BookingManager/BookingManagerPage';
import ServiceManagerPage from 'pages/Provider/ServiceManager/ServiceManagerPage';
import StatisticPage from 'pages/Provider/Statistic/StatisticPage';
import ProviderDashboard from 'pages/Provider/ProviderService/ProviderDashboard';
import ProviderProfilePage from 'pages/Provider/ProviderProfile/ProviderProfilePage';
import AdminBookingManagerPage from 'pages/Admin/AdminBookingManager/AdminBookingManagerPage';
import AdminProviderManagerPage from 'pages/Admin/AdminProviderManager/AdminProviderManagerPage';
import AdminServiceManagerPage from 'pages/Admin/AdminServiceManager/AdminServiceManagerPage';
import AdminStatisticPage from 'pages/Admin/AdminStatistic/AdminStatisticPage';
import CustomerManagerPage from 'pages/Admin/CustomerManager/CustomerManagerPage';
import ReviewManagerPage from 'pages/Admin/ReviewManager/ReviewManagerPage';
import CheckoutPage from 'pages/Checkout/CheckoutPage';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

const token = checkAuth();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOCATION.HOME} element={<Layout />}>
          <Route index element={<Home />} />

          <Route exact path={LOCATION.ABOUT} element={<AboutPage />} />
          <Route exact path={LOCATION.SERVICES} element={<Services />} />
          <Route exact path={`${LOCATION.SERVICES}/page/:pageNumber`} element={<Services />} />
          <Route exact path={`${LOCATION.SERVICES}/:id`} element={<ServiceDetails />} />
          <Route exact path={LOCATION.CONTACT} element={<ContactPage />} />

          <Route exact path={LOCATION.PROFILE} element={<ProfilePage />} />
          <Route exact path={LOCATION.BOOKING} element={<BookingPage />} />
          <Route exact path={LOCATION.CHECKOUT} element={<CheckoutPage />} />

          <Route exact path={LOCATION.BOOKINGMANAGER} element={<BookingManagerPage />} />
          <Route exact path={LOCATION.SERVICESMANAGER} element={<ServiceManagerPage />} />
          <Route exact path={LOCATION.STATISTIC} element={<StatisticPage />} />
          <Route exact path={LOCATION.PROVIDERSERVICE} element={<ProviderDashboard />} />
          <Route exact path={LOCATION.PROVIDERPROFILE} element={<ProviderProfilePage />} />

          <Route exact path={LOCATION.ADMINBOOKINGMANAGER} element={<AdminBookingManagerPage />} />
          <Route
            exact
            path={LOCATION.ADMINPROVIDERMANAGER}
            element={<AdminProviderManagerPage />}
          />
          <Route exact path={LOCATION.ADMINCUSTOMERMANAGER} element={<CustomerManagerPage />} />
          <Route exact path={LOCATION.ADMINSERVICEMANAGER} element={<AdminServiceManagerPage />} />
          <Route exact path={LOCATION.ADMINSTATISTIC} element={<AdminStatisticPage />} />
          <Route exact path={LOCATION.ADMINREVIEWMANAGER} element={<ReviewManagerPage />} />
        </Route>

        <Route path={LOCATION.LOGIN} element={<LoginPage />} />

        <Route path={LOCATION.REGISTER} element={<RegisterPage />} />

        <Route path="*" element={<Navigate to={token ? LOCATION.HOME : LOCATION.LOGIN} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
