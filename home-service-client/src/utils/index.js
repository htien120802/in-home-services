import { toast } from 'react-toastify';

export const apiErrorHandler = (error, showToast = true) => {
  let message = 'Error';

  if (error.response) {
    message = error.response.data.message;
  }

  if (showToast) {
    toast.error(message);
  }
};

export const removeSpacesWithTrim = (data) => {
  const newData = {};

  Object.entries(data).forEach(([key, value]) => {
    if (typeof value === 'string' && value !== '') {
      newData[key] = value.trim();
    } else {
      newData[key] = value;
    }
  });

  return newData;
};

export const getRefreshTokenFromCookie = () => {
  const cookies = document.cookie.split(';');

  for (let i = 0; i < cookies.length; i += 1) {
    const cookie = cookies[i].trim();
    if (cookie.startsWith('refreshToken=')) {
      return cookie.substring('refreshToken='.length);
    }
  }

  return null;
};
