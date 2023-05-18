import { defineStore } from 'pinia';
import { store } from '/@/store';

export const useAppStore = defineStore({
    id: "app",
    state:() => ({

    }),
    actions:{

    },
    getters:{

    }
})

export function useAppStoreWithout(){
    return useAppStore(store);
}