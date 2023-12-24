import React, { useEffect, useState } from 'react';

import CustomerProfile from 'pages/Customer/CustomerProfile/CustomerProfile';
import ProviderProfilePage from 'pages/Provider/ProviderProfile/ProviderProfilePage';

import { decodeJWT } from 'utils';

function ProfilePage() {
  const [token, setToken] = useState(localStorage.getItem('accessToken'));
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    setToken(decodeJWT(accessToken));
  }, [localStorage]);

  return (
    <div>
      {token?.role === 'ROLE_PROVIDER'
      && <ProviderProfilePage />}

      {token?.role === 'ROLE_CUSTOMER'
      && <CustomerProfile />}
    </div>
  );
}

export default ProfilePage;
