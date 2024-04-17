<template>
  <NDropdown :options="options" trigger="click" :show-arrow="true">
    <NButton text>
      <NSpace align="center" item-style="height: 100%; display: flex; align-items: center;" class="cursor-pointer px-2">
        <NImage :width="28" :height="28" :src="AppLogo"/>
        <div class="select-none">Donut Design Vue</div>
      </NSpace>
    </NButton>
  </NDropdown>
</template>

<script setup lang="ts">
import {Logout, Setting, User} from '@icon-park/vue-next';
import {NButton, NDropdown, NIcon, NImage, NSpace} from 'naive-ui';
import AppLogo from '/@/assets/images/logo.png';
import type {Component} from 'vue';
import {h, reactive} from "vue";

const renderIcon = (icon: Component) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    })
  }
}

const options = reactive([
  {key: '0', label: '用户中心', icon: renderIcon(User)},
  {key: '1', label: '用户设置', icon: renderIcon(Setting)},
  {key: 'd1', type: 'divider'},
  {key: '2', label: '退出登录', icon: renderIcon(Logout)},
]);
</script>