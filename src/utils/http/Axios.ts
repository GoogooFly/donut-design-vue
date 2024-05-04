import type {AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import axios from "axios";
import type {CreateAxiosOptions, AxiosTransform} from '/@/types/http/transform';
import type {Result, RequestOptions} from '/@/types/http/axios';
import {cloneDeep, isFunction} from 'lodash-es';

export class DAxios {
    private instance: AxiosInstance;
    private readonly options: CreateAxiosOptions;

    constructor(options: CreateAxiosOptions) {
        this.options = options;
        this.instance = axios.create(options);
        this.setupInterceptors();
    }

    post<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request<T>({...config, method: "POST"}, options);
    }

    get<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request<T>({...config, method: "GET"}, options);
    }

    delete<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request<T>({...config, method: "DELETE"}, options);
    }

    put<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        return this.request<T>({...config, method: "PUT"}, options);
    }

    /**
     * 配置请求拦截器
     * @private
     */
    private setupInterceptors() {
        const {instance, options: {transform}} = this;
        if (!transform) return;

        const {
            requestInterceptors,
            responseInterceptors,
            requestInterceptorsCatch,
            responseInterceptorsCatch
        } = transform;

        // 配置请求拦截器
        instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
            if (requestInterceptors && isFunction(requestInterceptors)) {
                config = requestInterceptors(config, this.options);
            }
            return config;
        }, undefined);

        // 配置请求拦截器异常
        if (requestInterceptorsCatch && isFunction(requestInterceptorsCatch)) {
            instance.interceptors.request.use(undefined, requestInterceptorsCatch);
        }

        // 配置响应拦截器
        instance.interceptors.response.use((res: AxiosResponse<any>) => {
            if (responseInterceptors && isFunction(responseInterceptors)) {
                res = responseInterceptors(res);
            }
            return res;
        }, undefined);

        // 配置响应拦截器异常
        if (responseInterceptorsCatch && isFunction(responseInterceptorsCatch)) {
            instance.interceptors.response.use(undefined, responseInterceptorsCatch);
        }
    }

    private getTransform(): AxiosTransform | undefined {
        const {transform} = this.options;

        return transform;
    }

    private request<T = any>(config: AxiosRequestConfig, options?: RequestOptions): Promise<T> {
        let conf: CreateAxiosOptions = cloneDeep(config);
        const {requestOptions} = this.options;
        // 合并接口单独配置
        const opt: RequestOptions = Object.assign({}, requestOptions, options);
        const transform = this.getTransform();

        conf.requestOptions = opt;
        const {transformResponseHook, requestCatchHook} = transform || {};

        return new Promise((resolve, reject) => {
            this.instance.request<any, AxiosResponse<Result>>(conf)
                .then((res: AxiosResponse<Result>) => {
                    // 封装响应结果 // 判断是否有拦截器并且是函数
                    if (transformResponseHook && isFunction(transformResponseHook)) {
                        try {
                            const ret = transformResponseHook(res, opt);
                            resolve(ret);
                        } catch (err) {
                            reject(err);
                        }
                        return;
                    }
                    resolve(res as unknown as Promise<T>);
                })
                .catch((err) => {
                    // 配置错误处理
                    if (requestCatchHook && isFunction(requestCatchHook)) {
                        reject(requestCatchHook(err, opt));
                    }
                    reject(err);
                })
        })
    }
}