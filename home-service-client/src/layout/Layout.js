import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Cpy from './Cpy/Cpy';

function Layout() {
  return (
    <div>
      <Header />

      <Outlet />

      <Footer />

      <Cpy />
    </div>
  );
}

export default Layout;
