/* eslint-disable @typescript-eslint/no-explicit-any */
import type { AxiosRequestConfig, AxiosResponse } from 'axios';

interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: {
    requestSuccessFn?: (config: any) => any;
    requestFailureFn?: (err: any) => any;
    responseSuccessFn?: (res: T) => T;
    responseFailureFn?: (err: any) => any;
  };
}

export type { HYRequestConfig };
