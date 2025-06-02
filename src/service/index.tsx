import { BASE_URL, TIME_OUT } from './config';
import HYRequest from './request';
import type { InternalAxiosRequestConfig } from 'axios';
import  { AxiosHeaders } from 'axios';

const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  headers: new AxiosHeaders(), // 使用 AxiosHeaders 构造函数创建 headers
  interceptors: {
    requestSuccessFn: (config: InternalAxiosRequestConfig) => {
      return config;
    }
  }
});

export default hyRequest;
