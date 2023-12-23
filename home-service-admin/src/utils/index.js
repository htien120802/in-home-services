import { toast } from 'react-toastify';
import jwt from 'jsonwebtoken';

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

export async function calculateDistance(lat1, lon1, lat2, lon2) {
  const response = await fetch(`https://api.tomtom.com/routing/1/calculateRoute/${lat1},${lon1}:${lat2},${lon2}/json?key=${process.env.REACT_APP_TOMTOM_KEY}`);
  const data = await response.json();

  const route = data.routes[0];
  const distance = route.summary.lengthInMeters / 1000;
  return distance;
}

export async function getCoordinatesFromLocation(location) {
  const response = await fetch(`https://api.tomtom.com/search/2/geocode/${encodeURIComponent(location)}.json?key=${process.env.REACT_APP_TOMTOM_KEY}`);
  const data = await response.json();

  if (data.results && data.results.length > 0) {
    const latitude = data.results[0].position.lat;
    const longitude = data.results[0].position.lon;
    return { latitude, longitude };
  }
  throw new Error('Location not found');
}

export async function calculateDistanceBetweenLocations(loc1, loc2) {
  const coords1 = await getCoordinatesFromLocation(loc1);
  const coords2 = await getCoordinatesFromLocation(loc2);
  const distance = calculateDistance(
    coords1.latitude,
    coords1.longitude,
    coords2.latitude,
    coords2.longitude,
  );
  return distance;
}

export const decodeJWT = (token) => {
  try {
    const decoded = jwt.decode(token);
    return decoded;
  } catch (error) {
    return null;
  }
};
