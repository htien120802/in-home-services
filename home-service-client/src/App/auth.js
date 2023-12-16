const checkAuth = () => {
  const TOKEN = localStorage.getItem('accessToken');
  const PUBLIC_ROUTES = ['login', 'forgot-password', 'register', '', 'about', 'contact', 'service'];

  const isPublicPage = PUBLIC_ROUTES.some((r) => window.location.href.includes(r));

  if (!TOKEN && !isPublicPage) {
    window.location.href = '/login';
    return null;
  }

  return TOKEN;
};

export default checkAuth;
