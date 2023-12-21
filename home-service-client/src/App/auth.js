import axiosClient from 'utils/axios';

const checkAuth = () => {
  const TOKEN = localStorage.getItem('accessToken');
  const PUBLIC_ROUTES = ['login', 'forgot-password', 'register', '', 'about', 'contact', 'service'];

  const isPublicPage = PUBLIC_ROUTES.some((r) => window.location.href.includes(r));

  if (!TOKEN && !isPublicPage) {
    window.location.href = '/login';
    return null;
  }

  axiosClient.defaults.headers.Authorization = `Bearer ${TOKEN}`;

  return TOKEN;
};

export default checkAuth;
