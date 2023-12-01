import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { LOCATION } from 'constants/index';

import Home from 'pages/Home/HomePage';
import Layout from 'layout/Layout';
import AboutPage from 'pages/About/AboutPage';
import Services from 'pages/Services/ServicesPage';
import ServiceDetails from 'pages/Service/ServiceDetails';
import ContactPage from 'pages/Contact/ContactPage';
import Reviews from 'pages/Reviews/Reviews';

import LoginPage from 'pages/Login/LoginPage';
import RegisterPage from 'pages/Register/RegisterPage';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={LOCATION.HOME} element={<Layout />}>
          <Route index element={<Home />} />

          <Route exact path={LOCATION.ABOUT} element={<AboutPage />} />

          <Route exact path={LOCATION.SERVICES} element={<Services />} />

          <Route exact path={`${LOCATION.SERVICES}/:id`} element={<ServiceDetails />} />

          <Route exact path={LOCATION.CONTACT} element={<ContactPage />} />

          <Route exact path={LOCATION.REVIEWS} element={<Reviews />} />
        </Route>

        <Route path={LOCATION.LOGIN} element={<LoginPage />} />

        <Route path={LOCATION.REGISTER} element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
