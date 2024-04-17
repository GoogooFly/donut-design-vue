import {viteMockServe} from 'vite-plugin-mock';

export function configMockPlugin(isBuild: boolean) {
    return viteMockServe({
        ignore: /^\_/,
        mockPath: "mock",
        localEnabled: !isBuild, //开发打包开关
        prodEnabled: isBuild,// 生产打包开关
        injectCode: `
             import { setupProdMockServer } from '../mock/index';
              setupProdMockServer();
            `,
    })
}
