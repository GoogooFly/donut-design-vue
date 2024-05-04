import type {AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import type {RequestOptions, Result} from '/@/types/http/axios';

export interface CreateAxiosOptions extends AxiosRequestConfig {
    authenticationScheme?: string;
    transform?: AxiosTransform;
    requestOptions?: RequestOptions;
}

export abstract class AxiosTransform {

    /**
     * 处理接收到的响应结果
     */
    transformResponseHook?: (res: AxiosResponse<Result>, opt: RequestOptions) => any;
    /**
     * 响应错误处理
     */
    requestCatchHook?: (e: Error, options: RequestOptions) => Promise<any>;

    /**
     *  请求之前的拦截器
     */
    requestInterceptors?: (
        config: InternalAxiosRequestConfig,
        options: CreateAxiosOptions,
    ) => InternalAxiosRequestConfig;

    /**
     *  请求之后的拦截器
     */
    responseInterceptors?: (res: AxiosResponse<any>) => AxiosResponse<any>;

    /**
     * 请求之前的拦截器错误处理
     */
    requestInterceptorsCatch?: (error: Error) => void;

    /**
     *  请求之后的拦截器错误处理
     */
    responseInterceptorsCatch?: (error: Error) => void;
}