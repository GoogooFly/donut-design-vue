<template>
  <div class="login-wrap w-screen h-screen overflow-hidden relative flex bg-white dark:bg-[#0a0a0a]">
    <div class="absolute top-10 left-20">
      <AppLogo/>
    </div>
    <div class="absolute top-10 right-8 flex items-center">
      <NSpace>
        <AppThemeModeToggle/>
        <AppLocalePicker />
      </NSpace>
    </div>

    <div class="p-5 w-auto flex-1 basis-auto flex items-center justify-center transition-w transition-h">
      <div class="rounded-2xl flex overflow-hidden shadow-sm <sm:w-full">
        <div class="w-550px <lg:hidden">
          <img class="w-full h-full object-cover" src="../../../assets/images/login_index_left.png">
        </div>
        <div class="w-500px bg-white dark:bg-[#141414] min-h-550px p-40px bg-white <sm:(w-full p-20px)">
          <LoginForm/>
          <RegisterForm />
          <ForgetPasswordForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts" name="Login">
import { NSpace } from 'naive-ui';
import {AppThemeModeToggle, AppLogo, AppLocalePicker} from '/@/components/Application';
import LoginForm from "/@/views/sys/login/LoginForm.vue";
import RegisterForm from "/@/views/sys/login/RegisterForm.vue";
import ForgetPasswordForm from "/@/views/sys/login/ForgetPasswordForm.vue";
</script>

<style scoped lang="less">
.login-wrap {
  background-image: url('../../../assets/images/login_index_bg.png');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>