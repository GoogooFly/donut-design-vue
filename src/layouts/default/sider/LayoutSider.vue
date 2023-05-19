<template>
  <NLayoutSider :inverted="true" :width="230">
    <AppLogo :size="18"/>
    <LayoutMenu/>
  </NLayoutSider>
</template>

<script setup lang="ts">
import { AppLogo } from '/@/components/Application';
import {NLayoutSider} from 'naive-ui';
import LayoutMenu from '/@/layouts/default/menu/index.vue';

</script>

<style scoped>

</style>