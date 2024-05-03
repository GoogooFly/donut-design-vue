import type {RouteRecordRaw} from 'vue-router';
import {LAYOUT} from '/@/router/constant';

export const Flow: RouteRecordRaw[] = [
    {
        path: "/flow",
        name: "Flow",
        component: LAYOUT,
        redirect: "/flow/flowChart",
        children: [
            {
                path: "flowChart",
                name: "FlowChart",
                component: () => import("/@/views/flow/flowChart/index.vue"),
                meta:{

                }
            }
        ]
    }
]