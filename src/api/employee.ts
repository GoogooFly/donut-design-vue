// import { defHttp } from '/@/utils/http';
import axios from 'axios';
import dayjs from 'dayjs';
import type {EmployeeQueryParams} from '/@/types/request/employee';

export async function employeePageApi(params: EmployeeQueryParams) {
    const {createTime, updateTime} = params;
    return axios({
        method: "GET",
        url: 'http://localhost:8080/admin/employee/page',
        params: {
            ...params,
            createTimeBegin: createTime ? dayjs(createTime[0]).format('YYYY-MM-DD HH:mm:ss') : null,
            createTimeEnd: createTime ? dayjs(createTime[1]).format('YYYY-MM-DD HH:mm:ss') : null,
            updateTimeBegin: updateTime ? dayjs(updateTime[0]).format('YYYY-MM-DD HH:mm:ss') : null,
            updateTimeEnd: updateTime ? dayjs(updateTime[1]).format('YYYY-MM-DD HH:mm:ss') : null,
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

export async function commonUploadApi(data: any) {
    return axios({
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        url: 'http://localhost:8080/admin/common/upload',
        data
    })
}
