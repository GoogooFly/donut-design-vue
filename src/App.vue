<template>
  <NConfigProvider
      :theme="getTheme"
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
import {computed, unref} from 'vue';
import type {GlobalTheme} from 'naive-ui';
import {dateZhCN, NConfigProvider, NDialogProvider, NMessageProvider, NNotificationProvider, zhCN, NLoadingBarProvider, darkTheme, lightTheme} from 'naive-ui';
import {darkThemeOverrides, lightThemeOverrides} from '/@/design';
import { useAppStore }  from '/@/store/modules/app';
import { ThemeEnum } from '/@/enums/appEnum';
import { storeToRefs } from 'pinia';

const { getAppTheme } = storeToRefs(useAppStore());


const getTheme = computed<GlobalTheme>(() => {
  if (unref(getAppTheme) === ThemeEnum.LIGHT) return lightTheme;
  else return darkTheme;
})
const getThemeOverrides = computed(() => {
  if (unref(getAppTheme) === ThemeEnum.LIGHT) return lightThemeOverrides;
  else return darkThemeOverrides;
})
</script>