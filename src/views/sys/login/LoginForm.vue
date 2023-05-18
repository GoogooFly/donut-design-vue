<template>
  <LoginFormTitle/>
  <NForm :show-label="false">
    <NFormItem class="enter-x">
      <NInput size="large" placeholder="账号" clearable>
        <template #prefix>
          <User class="flex items-center justify-center" theme="outline" size="18" fill="#c2c2c2"/>
        </template>
      </NInput>
    </NFormItem>
    <NFormItem class="enter-x">
      <NInput size="large" type="password" placeholder="密码" clearable show-password-on="mousedown">
        <template #prefix>
          <Lock class="flex items-center justify-center" theme="outline" size="18" fill="#c2c2c2"/>
        </template>
      </NInput>
    </NFormItem>
    <NRow class="enter-x">
      <NCol :span="12">
        <NFormItem>
          <NCheckbox label="记住我"/>
        </NFormItem>
      </NCol>
      <NCol :span="12">
        <NFormItem>
          <div class="w-full flex items-center justify-end">
            <NButton size="small" type="primary" text>忘记密码？</NButton>
          </div>
        </NFormItem>
      </NCol>
    </NRow>
    <NFormItem class="enter-x">
      <NButton size="large" type="primary" block>登录</NButton>
    </NFormItem>
    <NRow :gutter="[12, 0]" class="enter-x">
      <NCol :span="8">
        <NButton size="small" block>手机登录</NButton>
      </NCol>
      <NCol :span="8">
        <NButton size="small" block>二维码登录</NButton>
      </NCol>
      <NCol :span="8">
        <NButton size="small" block>注册</NButton>
      </NCol>
    </NRow>
    <NDivider class="text-[#00000073] text-12px enter-x">其它登录方式</NDivider>

    <NSpace class="w-full" justify="space-evenly">
      <NButton class="enter-x" size="large" circle>
        <template #icon>
          <Github class="flex items-center justify-center" theme="outline" size="24" fill="#888888"/>
        </template>
      </NButton>
      <NButton class="enter-x" size="large" circle>
        <template #icon>
          <Bytedance class="flex items-center justify-center" theme="outline" size="24" fill="#888888"/>
        </template>
      </NButton>
      <NButton class="enter-x" size="large" circle>
        <template #icon>
          <Gitlab class="flex items-center justify-center" theme="outline" size="24" fill="#888888"/>
        </template>
      </NButton>
      <NButton class="enter-x" size="large" circle>
        <template #icon>
          <Tiktok class="flex items-center justify-center" theme="outline" size="24" fill="#888888"/>
        </template>
      </NButton>
    </NSpace>
  </NForm>
</template>

<script setup lang="ts">
import LoginFormTitle from "/@/views/sys/login/LoginFormTitle.vue";
import {NButton, NCheckbox, NCol, NDivider, NForm, NFormItem, NInput, NRow, NSpace} from 'naive-ui';
import {Bytedance, Github, Gitlab, Lock, Tiktok, User} from '@icon-park/vue-next';</script>