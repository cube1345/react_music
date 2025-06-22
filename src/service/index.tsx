
import HYRequest from './request';
import type { InternalAxiosRequestConfig } from 'axios';

const hyRequest = new HYRequest({
  //。。。
  //。。。
  interceptors: {
    requestSuccessFn: (config: InternalAxiosRequestConfig) => {
      return config;
    },
  },
});

export default hyRequest;
