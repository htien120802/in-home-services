import { useDispatch } from 'react-redux';
import { actionLogout, actionRefreshToken } from 'store/actions';

import axiosClient from 'utils/axios';

import { decodeJWT } from 'utils';

const checkAuth = () => {
  const TOKEN = localStorage.getItem('accessToken');
  const PUBLIC_ROUTES = ['login', 'forgot-password', 'register', 'about', 'contact', 'services', 'forget-password'];

  const currentPath = window.location.pathname.substring(1);

  // Check if it's the home page
  const isHomePage = currentPath === '';

  const isPublicPage = PUBLIC_ROUTES.includes(currentPath);

  if (!isPublicPage && !isHomePage) {
    const token = decodeJWT(TOKEN);

    if (!token) {
      window.location.href = '/login';
      return null;
    }

    const currentTime = Date.now();
    const bufferTime = 5 * 60 * 1000;

    if (token.exp * 1000 - currentTime < bufferTime) {
      handleRefreshToken();
    }

    axiosClient.defaults.headers.Authorization = `Bearer ${TOKEN}`;
  }

  return TOKEN;
};

async function handleRefreshToken() {
  const dispatch = useDispatch();

  try {
    dispatch(actionRefreshToken());
  } catch (error) {
    if (error.response && error.response.status === 500) {
      dispatch(actionLogout());
    }
  }
}

export default checkAuth;
