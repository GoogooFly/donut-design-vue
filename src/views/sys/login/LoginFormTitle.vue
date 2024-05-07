<template>
  <h2 class="mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left dark:text-[#f6f6f6]">
{{getFormTitle}}
  </h2>
</template>

<script setup lang="ts" name="LoginFormTitle">
import { computed, unref } from 'vue';
import { useLoginState, LoginStateEnum } from '/@/views/sys/login/useLogin';

const { getLoginState } = useLoginState();

const getFormTitle = computed(() => {

  const titleObj = {
    [LoginStateEnum.RESET_PASSWORD]: "重置密码",
    [LoginStateEnum.LOGIN]: "登录",
    [LoginStateEnum.REGISTER]: "注册",
    [LoginStateEnum.MOBILE]: "手机号码登录",
    [LoginStateEnum.QR_CODE]: "二维码登录",
  };
  return titleObj[unref(getLoginState)];
});
</script>