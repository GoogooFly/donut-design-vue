import {defineStore} from 'pinia';
import {store} from '/@/store';
import {ThemeEnum} from '/@/enums/appEnum';
import { IAppConfig } from '/@/types/app';

interface IAppState {
    theme: ThemeEnum;
    loading: boolean;
    config:IAppConfig | null;
}

export const useAppStore = defineStore({
    id: "app",
    state:():IAppState => ({
        theme: ThemeEnum.LIGHT,
        loading: false,
        config: null,
    }),
    actions:{

    },
    getters:{

    }
})

export function useAppStoreWithout(){
    return useAppStore(store);
}