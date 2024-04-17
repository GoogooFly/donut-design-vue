import type {RouteRecordRaw} from 'vue-router';
import {PageEnum} from '/@/enums/pageEnum';
import {NOTE_FOUND_ROUTE} from './basic';

const modules = import.meta.glob('./modules/*.ts', {eager: true});

console.log(modules)

let routes: RouteRecordRaw[] = [];

Object.keys(modules).forEach((key) => {
    const module = modules[key]?.default;
    routes.push(module);
})

export const RootRoute: RouteRecordRaw = {
    path: "/",
    name: "Root",
    redirect: PageEnum.BASE_HOME,
    meta: {
        title: "Root",
        hidden: true,
    }
};

export const LoginRoute: RouteRecordRaw = {
    path: "/login",
    name: "Login",
    component: () => import("/@/views/sys/login/Login.vue"),
    meta: {
        title: "Login",
        hidden: true,
    }
}

export const basicRoutes: RouteRecordRaw[] = [
    LoginRoute,
    RootRoute,
    ...routes,
    NOTE_FOUND_ROUTE
];
