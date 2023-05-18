<template>
  <NSwitch size="large" v-model:value="isDark" :rail-style="() => '#151515'">
    <template #checked>
      <Sun class="flex items-center justify-center" theme="outline" size="18" fill="#ede21b"/>
    </template>
    <template #unchecked>
      <Moon class="flex items-center justify-center" theme="filled" size="18" fill="#ede21b"/>
    </template>
  </NSwitch>
</template>

<script setup lang="ts">
import { Sun, Moon } from '@icon-park/vue-next';
import {NSwitch} from 'naive-ui';
import {ref} from 'vue';

let isDark = ref(false);
</script>