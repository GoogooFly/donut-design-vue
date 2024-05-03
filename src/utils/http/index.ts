import {DAxios} from './Axios';
import { transform } from '/@/utils/http/transform';
import { requestOptions } from '/@/utils/http/requestOptions';

function createAxios() {
    return new DAxios({
        baseURL: "http://localhost:8080/admin",
        timeout: 10 * 1000,
        headers: {'Content-Type': 'application/json;charset=UTF-8'},
        transform,
        requestOptions,
    })
}

export const defHttp = createAxios();