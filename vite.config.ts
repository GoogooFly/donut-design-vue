import type {ConfigEnv, UserConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import {resolve} from 'path';
import {createStyleImportPlugin, VxeTableResolve} from 'vite-plugin-style-import'
import {viteMockServe } from "vite-plugin-mock";
import { createVitePlugins } from './build/vite/plugin';

function pathResolve(dir: string) {
    return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({command, mode}: ConfigEnv): UserConfig => {

    const isBuild = command === 'build';

    return {
        resolve: {
            alias: [
                // /@/xxxx => src/xxxx
                {
                    find: /\/@\//,
                    replacement: pathResolve('src') + '/',
                },
                // /#/xxxx => types/xxxx
                {
                    find: /\/#\//,
                    replacement: pathResolve('types') + '/',
                },
            ],
        },
        plugins: createVitePlugins(isBuild),
    }
}
