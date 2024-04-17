import {defineStore} from 'pinia';
import {store} from '/@/store';
import {LocaleEnum, ThemeEnum} from '/@/enums/appEnum';
import {APP_THEME_MODE_KEY_} from '/@/enums/cacheEnum';
import {IAppConfig} from '/@/types/app';
import {addClass, hasClass, removeClass} from '/@/utils/domUtils';

interface IAppState {
    theme: ThemeEnum;
    locale: LocaleEnum;
    loading: boolean;
    config: IAppConfig | null;
}

export const useAppStore = defineStore({
    id: "app",
    state: (): IAppState => ({
        theme: ThemeEnum.LIGHT,
        locale: LocaleEnum.zhCN,
        loading: false,
        config: null,
    }),
    actions: {
        setAppTheme(mode: ThemeEnum) {
            this.theme = mode;
            localStorage.setItem(APP_THEME_MODE_KEY_, mode);
        },
        async updateAppTheme() {
            const htmlRoot = document.getElementById('htmlRoot');
            if (!htmlRoot) return;
            const hasDarkClass = hasClass(htmlRoot, 'dark');
            if (this.theme === ThemeEnum.DARK) {
                // if (import.meta.env.PROD && !darkCssIsReady) {
                //     await loadDarkThemeCss();
                // }
                htmlRoot.setAttribute('class', ThemeEnum.DARK);
                if (!hasDarkClass) addClass(htmlRoot, ThemeEnum.DARK);
            } else {
                htmlRoot.setAttribute('class', ThemeEnum.LIGHT);
                if (hasDarkClass) removeClass(htmlRoot, ThemeEnum.DARK);
            }
        }
    },
    getters: {
        getAppTheme: (state): ThemeEnum => {
            return state.theme;
        }
    }
})

export function useAppStoreWithout() {
    return useAppStore(store);
}