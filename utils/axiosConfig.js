import axios from 'axios';

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

// Create custom axios instance
const axiosInstance = axios.create();

// Add request interceptor
axiosInstance.interceptors.request.use(
  config => {
    // You can add common headers or auth tokens here
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// Add response interceptor with retry logic
axiosInstance.interceptors.response.use(
  response => response,
  async error => {
    const { config } = error;
    
    // If no retry count exists, set it to 0
    config.retryCount = config.retryCount ?? 0;

    // Check if we should retry the request
    if (config.retryCount < MAX_RETRIES) {
      config.retryCount += 1;

      // Exponential backoff delay
      const delay = RETRY_DELAY * Math.pow(2, config.retryCount - 1);
      await new Promise(resolve => setTimeout(resolve, delay));

      // Retry the request
      return axiosInstance(config);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
