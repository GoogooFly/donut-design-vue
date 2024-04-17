import type {RouteRecordRaw} from 'vue-router';
import {LAYOUT} from '/@/router/constant';

 const EmployeeRoutes: RouteRecordRaw = {
    path: '/employee',
    name: 'Employee',
    component: LAYOUT,
    redirect: '/employee/list',
    meta: {
        title: '员工管理',
        icon: 'ant-design:user-outlined',
        orderNo: 1,
    },
    children: [
        {
            path: 'list',
            name: 'EmployeeList',
            component: () => import('/@/views/employee/list/index.vue'),
            meta: {
                title: '员工列表',
                icon: 'ant-design:user-outlined',
                orderNo: 1,
            }
        }
    ]
}
export default EmployeeRoutes;