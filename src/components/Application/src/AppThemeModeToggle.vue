<template>
  <NSwitch size="large" v-model:value="isDark" :rail-style="() => '#151515'" @update:value="onUpdate">
    <template #checked>
      <Sun class="flex items-center justify-center" theme="outline" size="18" fill="#ede21b"/>
    </template>
    <template #unchecked>
      <Moon class="flex items-center justify-center" theme="filled" size="18" fill="#ede21b"/>
    </template>
  </NSwitch>
</template>

<script setup lang="ts">
import {Moon, Sun} from '@icon-park/vue-next';
import {NSwitch} from 'naive-ui';
import {ref} from 'vue';
import {useAppStore} from '/@/store/modules/app';
import {ThemeEnum} from '/@/enums/appEnum';

const { setAppTheme, updateAppTheme } = useAppStore();
let isDark = ref(true);

function onUpdate(isDark){
  const darkMode = !isDark ? ThemeEnum.DARK : ThemeEnum.LIGHT;
  setAppTheme(darkMode);
  updateAppTheme();
}
</script>