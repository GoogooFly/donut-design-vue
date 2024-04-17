// import { defHttp } from '/@/utils/http';
import axios from 'axios';

export async function employeePageApi({ page, pageSize }: { page: number, pageSize: number }) {
    return axios({
        method: "GET",
        url: 'http://localhost:8080/admin/employee/page',
        params: {
            page,
            pageSize
        }
    });
}

export async function employeeAddApi(data: any) {
    return axios({
        method: "POST",
        url: 'http://localhost:8080/admin/employee/add',
        data
    });
}

// 删除
export async function employeeDeleteApi(id: number) {
    return axios({
        method: "DELETE",
        url: 'http://localhost:8080/admin/employee/delete',
        params: {
            id
        }
    })
}

// 更新状态
export async function employeeUpdateStatusApi(id: number, status: number) {
    return axios({
        method: "PUT",
        url: 'http://localhost:8080/admin/employee/updateStatus',
        params: {
            id,
            status
        }
    })
}

// 更新
export async function employeeUpdateApi(data: any) {
    return axios({
        method: "PUT",
        url: 'http://localhost:8080/admin/employee/update',
        data
    })
}
