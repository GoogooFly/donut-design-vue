import type {Router} from 'vue-router';
import {PageEnum} from '/@/enums/pageEnum';
import {useUserStore} from '/@/store/modules/user';

const LOGIN_PATH = PageEnum.BASE_LOGIN;

/**
 * 权限守卫
 * @param router
 */
export function createPermissionGuard(router: Router): void {
    router.beforeEach(async (to, _, next) => {
        const userStore = useUserStore();
        const token = userStore.getToken;

        if (to.path === LOGIN_PATH || to.path === '/') next();
        if (!token) {
            next(LOGIN_PATH);
        }
        console.log(to)
        next();
    });
}