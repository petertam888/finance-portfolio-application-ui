import { useState } from 'react';
import axiosInstance from '../utils/axiosConfig';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const callApi = async (method, url, data = null, options = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await axiosInstance({
        method,
        url,
        data,
        ...options
      });
      setLoading(false);
      return response.data;
    } catch (err) {
      setError(err.message || 'An error occurred');
      setLoading(false);
      throw err;
    }
  };

  return {
    loading,
    error,
    callApi
  };
}; 