import type {Plugin} from 'vite';
import vue from '@vitejs/plugin-vue';
import WindiCSS from 'vite-plugin-windicss';
import {configMockPlugin} from './mock';
import {configVxeTablePlugin} from './vxeTable';
import { configJsxPlugin } from './jsx';

export function createVitePlugins(isBuild) {

    const vitePlugins: (Plugin | Plugin[])[] = [
        vue()
    ];

    vitePlugins.push(WindiCSS());
    vitePlugins.push(configMockPlugin(isBuild));
    vitePlugins.push(configVxeTablePlugin());
    vitePlugins.push(configJsxPlugin(isBuild));

    return vitePlugins;
}