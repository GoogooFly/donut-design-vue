import type { App } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';

export const router = createRouter({
    history: createWebHashHistory(import.meta.env.VITE_PUBLIC_PATH),
    routes: [
        {
            name: "Login",
            path: "/login",
            component: () => import("/@/views/sys/login/Login.vue"),
            meta:{

            }
        }
    ],
    strict: true,
    scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App<Element>) {
    app.use(router);
}