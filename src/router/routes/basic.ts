import type {RouteRecordRaw} from 'vue-router';
import {ERROR_PAGE, LAYOUT} from '../constant';

export const NOTE_FOUND_ROUTE: RouteRecordRaw = {
    path: '/:path(.*)*',
    name: "ErrorPage",
    component: LAYOUT,
    meta: {
        title: 'ErrorPage'
    },
    children: [
        {
            path: '/:path(.*)*',
            name: "PageNotFound",
            component: ERROR_PAGE,
            meta: {
                title: 'ErrorPage'
            },
        },
    ],
}
