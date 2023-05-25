import type {RouteRecordRaw} from 'vue-router';
import {PageEnum} from '/@/enums/pageEnum';
import {NOTE_FOUND_ROUTE} from './basic';
import { Dashboard }  from './modules/dashboard';
import { Flow } from './modules/flow';

export const RootRoute: RouteRecordRaw = {
    path: "/",
    name: "Root",
    redirect: PageEnum.BASE_HOME,
    meta: {
        title: "Root"
    }
};

export const LoginRoute: RouteRecordRaw = {
    path: "/login",
    name: "Login",
    component: () => import("/@/views/sys/login/Login.vue"),
    meta: {
        title: "Login"
    }
}

export const basicRoutes: RouteRecordRaw[] = [
    LoginRoute,
    RootRoute,
    ...Dashboard,
    ...Flow,
    NOTE_FOUND_ROUTE
];
