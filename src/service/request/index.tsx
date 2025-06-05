/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { HYRequestConfig } from './type';
import type { InternalAxiosRequestConfig } from 'axios';

class HYRequest {
  instance: AxiosInstance;

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config);

    // 添加请求拦截器
    this.instance.interceptors.request.use(
      config => {
        // 在发送请求之前做些什么
        return config;
      },
      error => {
        // 对请求错误做些什么
        return Promise.reject(error);
      }
    );

    // 添加响应拦截器
    this.instance.interceptors.response.use(
      response => {
        // 对响应数据做点什么
        return response.data;
      },
      error => {
        // 对响应错误做点什么
        return Promise.reject(error);
      }
    );

    // 添加自定义拦截器
    this.instance.interceptors.request.use(
      config.interceptors?.requestSuccessFn,
      config.interceptors?.requestFailureFn
    );
    this.instance.interceptors.response.use(
      config.interceptors?.responseSuccessFn,
      config.interceptors?.responseFailureFn
    );
  }

  request<T = any>(config: HYRequestConfig<T>) {
    if (config.interceptors?.requestSuccessFn) {
      config = config.interceptors.requestSuccessFn(
        config as InternalAxiosRequestConfig
      );
    }

    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then(res => {
          if (config.interceptors?.responseSuccessFn) {
            res = config.interceptors.responseSuccessFn(res);
          }
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }

  get<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'GET' });
  }

  post<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'POST' });
  }

  delete<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'DELETE' });
  }

  patch<T = any>(config: HYRequestConfig<T>) {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}

export default HYRequest;
