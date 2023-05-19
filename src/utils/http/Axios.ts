import type {AxiosInstance, AxiosRequestConfig, AxiosResponse} from 'axios';
import axios from "axios";
import type {CreateAxiosOptions} from './transform';
import {Result} from "/@/types/axios";

export class DAxios {
    private instance: AxiosInstance;
    private readonly options: CreateAxiosOptions;

    constructor(options: CreateAxiosOptions) {
        this.options = options;
        this.instance = axios.create(options);
    }

    post<T = any>(): Promise<T> {
        return this.request<T>({method: "POST"});
    }

    get() {

    }

    delete() {

    }

    put() {

    }

    patch() {

    }

    private request<T = any>(config: AxiosRequestConfig): Promise<T> {
        return new Promise((resolve, reject) => {
            this.instance.request<any, AxiosResponse<Result>>(config)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                })
        })
    }
}