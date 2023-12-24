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
import Services from 'pages/Services/ServicesPage';
import ServiceDetails from 'pages/Service/ServiceDetails';

import LoginPage from 'pages/Login/LoginPage';
import RegisterPage from 'pages/Register/RegisterPage';
import ForgetPasswordPage from 'pages/ForgetPassword/ForgetPasswordPage';

import checkAuth from './auth';

import ProfilePage from 'pages/Profile/ProfilePage';
import BookingPage from 'pages/Booking/BookingPage';
import ProviderService from 'pages/Provider/ProviderService/ProviderService';
import ProviderBooking from 'pages/Provider/ProviderBooking/ProviderBooking';
import ProviderProfilePage from 'pages/Provider/ProviderProfile/ProviderProfilePage';
import CheckoutPage from 'pages/Checkout/CheckoutPage';
import BookingDetailPage from 'pages/BookingDetail/BookingDetail';
import BookingFailedPage from 'pages/BookingFailed/BookingFailed';

import './App.css';
import '@fortawesome/fontawesome-free/css/all.css';

const token = checkAuth();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOCATION.HOME} element={<Layout />}>
          <Route index element={<Home />} />

          <Route exact path={LOCATION.SERVICES} element={<Services />} />
          <Route exact path={`${LOCATION.SERVICES}/page/:pageNumber`} element={<Services />} />
          <Route exact path={`${LOCATION.SERVICES}/:id`} element={<ServiceDetails />} />

          <Route exact path={LOCATION.PROFILE} element={<ProfilePage />} />
          <Route exact path={`${LOCATION.BOOKING}/:id`} element={<BookingPage />} />
          <Route exact path={`${LOCATION.CHECKOUT}/:id`} element={<CheckoutPage />} />

          <Route exact path={`${LOCATION.BOOKING}/detail/:id`} element={<BookingDetailPage />} />
          <Route exact path={`${LOCATION.BOOKING}/failed`} element={<BookingFailedPage />} />

          <Route exact path={LOCATION.PROVIDERSERVICE} element={<ProviderService />} />
          <Route exact path={LOCATION.PROVIDERBOOKING} element={<ProviderBooking />} />
          <Route exact path={LOCATION.PROVIDERPROFILE} element={<ProviderProfilePage />} />
        </Route>

        <Route path={LOCATION.LOGIN} element={<LoginPage />} />
        <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
        <Route path={`${LOCATION.FORGETPASSWORD}/:token`} element={<ForgetPasswordPage />} />

        <Route path="*" element={<Navigate to={token ? LOCATION.HOME : LOCATION.LOGIN} replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
