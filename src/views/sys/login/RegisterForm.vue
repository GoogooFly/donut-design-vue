<template>
  <LoginFormTitle class="enter-x" v-show="getShow"/>
  <NForm class="enter-x" autocomplete="off" :show-label="false" v-show="getShow">
    <NFormItem name="mobile" class="enter-x">
      <NInput size="large" placeholder="手机号码" clearable>
        <template #prefix>
          <Iphone class="flex items-center justify-center" theme="outline" size="18" fill="#c2c2c2"/>
        </template>
      </NInput>
    </NFormItem>
    <NFormItem name="name" class="enter-x">
      <NRow :gutter="[8,0]">
        <NCol :span="16">
          <NInput size="large" placeholder="验证码" clearable>
            <template #prefix>
              <Mail class="flex items-center justify-center" theme="outline" size="18" fill="#c2c2c2"/>
            </template>
          </NInput>
        </NCol>
        <NCol :span="8"><NButton size="large" block>获取验证码</NButton></NCol>
      </NRow>
    </NFormItem>
    <NFormItem name="password" class="enter-x">
      <NInput size="large" type="password" clearable show-password-on="mousedown">
        <template #prefix>
          <Lock class="flex items-center justify-center" theme="outline" size="18" fill="#c2c2c2"/>
        </template>
      </NInput>
    </NFormItem>
    <NFormItem name="confirmPassword" class="enter-x">
      <NInput size="large" type="password" clearable show-password-on="mousedown">
        <template #prefix>
          <Lock class="flex items-center justify-center" theme="outline" size="18" fill="#c2c2c2"/>
        </template>
      </NInput>
    </NFormItem>

    <NFormItem class="enter-x" name="policy">
      <NCheckbox size="small">
        <NSpace>
          <span>我已经仔细阅读并接受</span>
          <NButton size="small" type="primary" text>《用户协议》</NButton>
          <NButton size="small" type="primary" text>《隐私权政策》</NButton>
        </NSpace>
      </NCheckbox>
    </NFormItem>

    <NButton type="primary" class="enter-x" size="large" block>注册</NButton>
    <NButton size="large" block class="mt-4 enter-x" @click="handleBackLogin">返回</NButton>
  </NForm>
</template>

<script setup lang="ts">
import {computed, unref} from 'vue';
import LoginFormTitle from "/@/views/sys/login/LoginFormTitle.vue";
import { NForm, NFormItem, NButton, NCheckbox, NInput, NRow, NCol } from 'naive-ui';
import {LoginStateEnum, useLoginState} from '/@/views/sys/login/useLogin';
import {Iphone, Lock, Mail} from '@icon-park/vue-next';

const {getLoginState, handleBackLogin} = useLoginState();
const getShow = computed(() => unref(getLoginState) === LoginStateEnum.REGISTER);
</script>