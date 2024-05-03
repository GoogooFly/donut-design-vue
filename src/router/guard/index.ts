import type { Router } from 'vue-router';
import { createPermissionGuard } from '/@/router/guard/permissionGuard';

/**
 * 路由守卫
 * @param router
 */
export function setupRouterGuard(router: Router){
    // 创建权限路由守卫
    createPermissionGuard(router);
}