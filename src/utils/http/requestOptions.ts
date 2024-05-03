import type {RequestOptions} from '/@/types/http/axios';

export const requestOptions: RequestOptions = {
    // 接口响应失败 提示弹出模式
    errorMessageMode: "message",
    // 接口响应失败 提示弹出模式
    successMessageMode: "message",
    // 是否携带 token
    withToken: true,
};