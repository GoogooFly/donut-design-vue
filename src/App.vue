<template>
  <NConfigProvider
      :theme="theme"
      :theme-overrides="getThemeOverrides"
      :locale="zhCN"
      :date-locale="dateZhCN"
  >
    <NNotificationProvider>
      <NMessageProvider>
        <NDialogProvider>
          <NLoadingBarProvider>
            <RouterView/>
          </NLoadingBarProvider>
        </NDialogProvider>
      </NMessageProvider>
    </NNotificationProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import {computed, ref, unref} from 'vue';
import type {GlobalTheme} from 'naive-ui';
import {dateZhCN, NConfigProvider, NDialogProvider, NMessageProvider, NNotificationProvider, zhCN, NLoadingBarProvider} from 'naive-ui';
import {darkThemeOverrides, lightThemeOverrides} from '/@/design';

let theme = ref<GlobalTheme | null>(null);
const getThemeOverrides = computed(() => {
  if (unref(theme) === null) return lightThemeOverrides;
  else return darkThemeOverrides;
})
</script>