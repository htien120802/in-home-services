import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Cpy from './Cpy/Cpy';

import Map from 'components/Map/Map';

function Layout() {
  return (
    <div>
      <Header />

      <Outlet />

      <Map />

      <Footer />

      <Cpy />
    </div>
  );
}

export default Layout;
