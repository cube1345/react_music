import { BASE_URL, TIME_OUT } from './config';
import HYRequest from './request';
import type { InternalAxiosRequestConfig } from 'axios';

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config: InternalAxiosRequestConfig) => {
      return config;
    },
  },
});

export default hyRequest;
