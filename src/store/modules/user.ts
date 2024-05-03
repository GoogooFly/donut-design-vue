import {defineStore} from 'pinia';
import {store} from '/@/store';

interface IUserState {
    token: string | undefined;
    userInfo: {
        // 用户 id
        id: number;
        // 用户名
        username: string;
        // 用户姓名
        name: string;
        // 用户手机号
        phone: string;
        // 用户性别
        sex: "1" | "2";
    } | null;
    lastUpdateTime: string;
}

export const useUserStore = defineStore({
    id: "user",
    persist: {
        key: "DONUT_USER_STORE",
        storage: localStorage,
        paths: ["token", "userInfo", "lastUpdateTime"]
    },
    state: (): IUserState => ({
        token: undefined,
        userInfo: null,
        lastUpdateTime: "",
    }),
    actions: {
        setToken(token: string | undefined) {
            this.token = token || undefined;
        },
        setUserInfo(info: IUserState['userInfo'] | null) {
            this.userInfo = info || null;
        },
        resetState() {
            this.userInfo = null;
            this.token = '';
            this.lastUpdateTime = "";
        },
        login() {

        },
        logout() {

        }
    },
    getters: {
        getToken(): string | undefined {
            return this.token;
        }
    }
})

export function useUserStoreWithout() {
    return useUserStore(store);
}