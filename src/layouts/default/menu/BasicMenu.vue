<template>
  <NMenu
      :indent="12"
      v-model:value="activeKey"
      :options="menuOptions"
      :inverted="false"
      :collapsed-icon-size="22"
  />
</template>

<script setup lang="ts">
import type {Component} from 'vue'
import {h, ref} from 'vue';
import type {MenuOption} from 'naive-ui'
import {NIcon, NMenu} from 'naive-ui';
import {Analysis, Classroom, DashboardOne, EditName, Me, User, Workbench, SettingConfig} from '@icon-park/vue-next';

const activeKey = ref<string | null>('0-0');

function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

const menuOptions: MenuOption[] = [
  {
    key: '0',
    label: '仪表盘',
    icon: renderIcon(DashboardOne),
    children: [
      {key: '0-0', label: "主控台", icon: renderIcon(SettingConfig)},
      {key: '0-1', label: "工作台", icon: renderIcon(Workbench)},
      {key: '0-2', label: "分析页", icon: renderIcon(Analysis)},
    ]
  },
  {
    label: '个人中心',
    key: '1',
    icon: renderIcon(User),
    children: [
      {key: '1-0', label: "用户信息", icon: renderIcon(Classroom)},
      {key: '1-1', label: "用户设置", icon: renderIcon(EditName)},
    ]
  },
  {
    label: '关于',
    key: '2',
    icon: renderIcon(Me),
  }
]

</script>