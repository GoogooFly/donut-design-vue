import type {RouteRecordRaw} from 'vue-router';
import {LAYOUT} from '/@/router/constant';
import {DashboardOne} from "@icon-park/vue-next";

 const Dashboard: RouteRecordRaw = {
    path: "/dashboard",
    name: "Dashboard",
    component: LAYOUT,
    redirect: "/dashboard/console",
    meta: {
        title: "仪表盘",
        icon: DashboardOne,
    },
    children: [
        {
            path: "console",
            name: "Console",
            component: () => import("/@/views/dashboard/console/index.vue"),
            meta: {
                title: "主控台",
                icon: DashboardOne,
            }
        },
        {
            path: "analysis",
            name: "Analysis",
            component: () => import("/@/views/dashboard/analysis/index.vue"),
            meta: {
                title: "工作台",
                icon: DashboardOne,
            }
        },
        {
            path: "workbench",
            name: "Workbench",
            component: () => import("/@/views/dashboard/workbench/index.vue"),
            meta: {
                title: "分析页",
                icon: DashboardOne,
            }
        }
    ]
}

export default Dashboard;
