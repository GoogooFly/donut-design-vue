import type {AxiosTransform} from '/@/types/http/transform';
import type {AxiosResponse} from "axios";
import type {Result} from "/@/types/http/axios";
import {ResultEnum} from "/@/enums/httpEnum";
import {useMessage} from '/@/hooks/web/useMessage';
import {isString} from "lodash-es";
import {useUserStore} from '/@/store/modules/user';

const userStore = useUserStore();

/**
 *  网络请求转换器
 */
export const transform: AxiosTransform = {
    // 响应结果转换器
    transformResponseHook(res: AxiosResponse<Result>) {
        const {data} = res;

        if (!data) {
            throw new Error("请求出错，请重试！");
        }

        const {message, data: result, code} = data;

        // 判断是否成功
        const hasSuccess = data && Reflect.has(data, 'code') && code === ResultEnum.SUCCESS;
        if (hasSuccess) {
            return result;
        }

        if (message && isString(message)) {
            useMessage.error(message);
        }

        throw new Error("请求出错，请重试！");
    },
    // 请求拦截器
    requestInterceptors(config, options) {
        const token = userStore!.getToken;
        if (token && options.requestOptions?.withToken) {
            if (options.authenticationScheme) {
                config.headers!.Authorization = `${options.authenticationScheme} ${token}`;
            } else {
                config.headers!.Authorization = `Bearer ${token}`;
            }
        }
        return config;
    }
};
