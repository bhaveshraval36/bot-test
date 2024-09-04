import axios from 'axios';

class AxiosServer {
  constructor(baseURL) {
    this.axiosInstance = axios.create({
      baseURL,
    });
  }

  async post(url, data, headers = {}) {
    try {

      const response = await this.axiosInstance.post(url, data, {
        headers: {
        //   'Content-Type': 'application/json', // Default Content-Type
          ...headers, // Override or add additional headers
        },
      });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  async get(url, headers = {}) {
    try {
      const response = await this.axiosInstance.get(url, {
        headers: {
        //   'Content-Type': 'application/json', // Default Content-Type
          ...headers, // Override or add additional headers
        },
      });
      return response.data;
    } catch (error) {
      this.handleError(error);
    }
  }

  handleError(error) {
    if (error.response) {
      console.error('Error response data:', error.response.data);
      console.error('Error response status:', error.response.status);
      console.error('Error response headers:', error.response.headers);
    } else if (error.request) {
      console.error('Error request data:', error.request);
    } else {
      console.error('Error message:', error.message);
    }
    console.error('Error config:', error.config);
    throw new Error('An error occurred while making an HTTP request');
  }
}

export default AxiosServer;