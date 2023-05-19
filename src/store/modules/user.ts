import {defineStore} from 'pinia';
import {store} from '/@/store';

interface IUserState {
    token: string | undefined;
    userInfo: {
        userId: string;
        username: string;
        desc: string | undefined;
        realName: string;
    } | null;
    lastUpdateTime: string;
}

export const useUserStore = defineStore({
    id: "user",
    state: (): IUserState => ({
        token: undefined,
        userInfo: null,
        lastUpdateTime: "",
    }),
    actions: {},
    getters: {}
})

export function useUserStoreWithout() {
    return useUserStore(store);
}