// utils/axiosInstance.js
import axios from 'axios';
import { getCookies } from 'cookies-next';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor to add Bearer token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = getCookies('token'); // Get token from cookie
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`; // Add Bearer token
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
