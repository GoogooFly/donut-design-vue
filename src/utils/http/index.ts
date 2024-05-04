import {DAxios} from './Axios';
import { transform } from '/@/utils/http/transform';
import { requestOptions } from '/@/utils/http/requestOptions';
import {ContentTypeEnum} from "/@/enums/httpEnum.ts";

function createAxios() {
    return new DAxios({
        baseURL: import.meta.env.VITE_BAST_URL,
        timeout: 10 * 1000,
        headers: {'Content-Type': ContentTypeEnum.JSON},
        transform,
        requestOptions,
    })
}

export const defHttp = createAxios();