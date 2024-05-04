import {defHttp} from '/@/utils/http';
import axios from 'axios';
import dayjs from 'dayjs';
import type {EmployeeLoginDTO} from '/@/types/request/dto/employee';
import type {EmployeeLoginVO} from '/@/types/request/vo/employee';
import type {EmployeeQueryParams} from '/@/types/request/employee';

/**
 * 员工登录接口
 * @param data
 */
export function employeeLogin(data: EmployeeLoginDTO): Promise<EmployeeLoginVO> {
    return defHttp.post<EmployeeLoginVO>({
        url: "/employee/login",
        data
    })
}

export async function employeePageApi(params: EmployeeQueryParams) {
    const {createTime, updateTime} = params;
    return defHttp.get({
        url: "/employee/page",
        params: {
            ...params,
            createTimeBegin: createTime ? dayjs(createTime[0]).format('YYYY-MM-DD HH:mm:ss') : null,
            createTimeEnd: createTime ? dayjs(createTime[1]).format('YYYY-MM-DD HH:mm:ss') : null,
            updateTimeBegin: updateTime ? dayjs(updateTime[0]).format('YYYY-MM-DD HH:mm:ss') : null,
            updateTimeEnd: updateTime ? dayjs(updateTime[1]).format('YYYY-MM-DD HH:mm:ss') : null,
        }
    })
}

export async function employeeAddApi(data: any) {
    return defHttp.post({
        url: "/employee/add",
        data
    })
}

// 删除
export async function employeeDeleteApi(id: number) {
    return defHttp.delete({
        url:"/employee/delete",
        params: {
            id
        }
    })
}

// 更新状态
export async function employeeUpdateStatusApi(id: number, status: number) {
    return defHttp.put({
        url:"/employee/updateStatus",
        params: {
            id,
            status
        }
    })
}

// 更新
export async function employeeUpdateApi(data: any) {
    return defHttp.put({
        url:"/employee/update",
        data
    })
}

export async function commonUploadApi(data: any) {
    // return defHttp.post({
    //     url:"/admin/common/upload",
    //     data
    // })
    return axios({
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data'
        },
        url: 'http://localhost:8080/admin/common/upload',
        data
    })
}
