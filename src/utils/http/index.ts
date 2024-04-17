import {DAxios} from './Axios';

function createAxios() {
    return new DAxios({
        baseURL: "http://localhost:8080/admin",
        timeout: 10 * 1000,
        headers: {'Content-Type': 'application/json;charset=UTF-8'}
    })
}

export const defHttp = createAxios();