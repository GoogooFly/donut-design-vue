<template>
  <LoginFormTitle class="enter-x" v-show="getShow"/>
  <NForm class="enter-x" :show-label="false" v-show="getShow">
    <NFormItem name="mobile" class="enter-x">
      <NInput size="large" placeholder="手机号码" clearable>
        <template #prefix>
          <NIcon :component="Iphone" :size="18" color="#c2c2c2"/>
        </template>
      </NInput>
    </NFormItem>
    <NFormItem name="name" class="enter-x">
      <NRow :gutter="[8,0]">
        <NCol :span="16">
          <NInput size="large" placeholder="验证码" clearable>
            <template #prefix>
              <NIcon :component="Mail" :size="18" color="#c2c2c2"/>
            </template>
          </NInput>
        </NCol>
        <NCol :span="8">
          <NButton size="large" block>获取验证码</NButton>
        </NCol>
      </NRow>
    </NFormItem>
    <NFormItem name="password" class="enter-x">
      <NInput size="large" type="password" clearable show-password-on="mousedown">
        <template #prefix>
          <NIcon :component="Lock" :size="18" color="#c2c2c2"/>
        </template>
      </NInput>
    </NFormItem>
    <NFormItem name="confirmPassword" class="enter-x">
      <NInput size="large" type="password" clearable show-password-on="mousedown">
        <template #prefix>
          <NIcon :component="Lock" :size="18" color="#c2c2c2"/>
        </template>
      </NInput>
    </NFormItem>

    <NButton type="primary" size="large" block>重置</NButton>
    <NButton size="large" block class="mt-4" @click="handleBackLogin">返回</NButton>
  </NForm>
</template>

<script setup lang="ts" name="ForgetPasswordForm">
import {computed, unref} from 'vue';
import LoginFormTitle from "/@/views/sys/login/LoginFormTitle.vue";
import {NButton, NForm, NFormItem, NInput, NRow, NCol, NIcon} from 'naive-ui';
import {LoginStateEnum, useLoginState} from '/@/views/sys/login/useLogin';
import {Iphone, Lock, Mail} from '@icon-park/vue-next';

const {getLoginState, handleBackLogin} = useLoginState();
const getShow = computed(() => unref(getLoginState) === LoginStateEnum.RESET_PASSWORD);
</script>