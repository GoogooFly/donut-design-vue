import { ref, computed } from "vue";

export enum LoginStateEnum {
    LOGIN,
    REGISTER,
    RESET_PASSWORD,
    MOBILE,
    QR_CODE,
}

// 当前选择 登录表单
const currentState = ref<LoginStateEnum>(LoginStateEnum.LOGIN);


export function useLoginState() {
    function setLoginState(state: LoginStateEnum) {
        currentState.value = state;
    }

    const getLoginState = computed(() => currentState.value);

    function handleBackLogin() {
        setLoginState(LoginStateEnum.LOGIN);
    }

    return { setLoginState, getLoginState, handleBackLogin };
}