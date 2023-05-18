import { defineStore } from 'pinia';
import { store } from '/@/store';

export const useUserStore = defineStore({
    id: "user",
    state:() => ({

    }),
    actions:{

    },
    getters:{

    }
})

export function useUserStoreWithout(){
    return useUserStore(store);
}