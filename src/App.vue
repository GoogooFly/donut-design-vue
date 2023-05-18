<template>
  <NConfigProvider :theme="theme">
    <RouterView />
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NConfigProvider, darkTheme, lightTheme  } from 'naive-ui';
import type { GlobalTheme } from 'naive-ui';
import { ref } from 'vue';

let theme = ref<GlobalTheme | null>(lightTheme);
</script>