import { createApp } from "vue";
import App from "./App.vue";
import "virtual:windi.css";
import "vfonts/Lato.css";
import "vfonts/FiraCode.css";
import "./design/inedx.less";
import { setupRouter, router } from "/@/router";
import { setupRouterGuard } from "/@/router/guard";
import { setupStore } from "/@/store";
import { setupGlobDirectives } from "/@/directives";
import { registerGlobComp } from "/@/components/registerGlobComp";
import { setupI18n } from "/@/locales/setupI18n";

function bootstrap(): void {
  const app = createApp(App);

  // 配置路由
  setupRouter(app);
  // 配置路由守卫
  setupRouterGuard(router);
  // 配置状态管理
  setupStore(app);
  // 注册全局自定义指令
  setupGlobDirectives(app);
  // 注册全局组件
  registerGlobComp(app);
  // 配置国际化
  setupI18n(app);

  app.mount("#app");
}

bootstrap();
