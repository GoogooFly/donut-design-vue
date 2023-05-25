import type {RouteRecordRaw} from 'vue-router';
import {LAYOUT} from '/@/router/constant';

export const Dashboard: RouteRecordRaw[] = [
    {
        path: "/dashboard",
        name: "Dashboard",
        component: LAYOUT,
        redirect: "/dashboard/console",
        children: [
            {
                path: "console",
                name: "Console",
                component: () => import("/@/views/dashboard/console/index.vue"),
                meta:{

                }
            },
            {
                path: "analysis",
                name: "Analysis",
                component: () => import("/@/views/dashboard/analysis/index.vue"),
                meta:{

                }
            },
            {
                path: "workbench",
                name: "Workbench",
                component: () => import("/@/views/dashboard/workbench/index.vue"),
                meta:{

                }
            }
        ]
    }
]