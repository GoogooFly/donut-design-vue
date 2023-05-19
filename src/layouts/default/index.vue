<template>
  <NLayout has-sider  position="absolute">
    <LayoutSider />
    <NLayout>
      <LayoutHeader />
      <LayoutContent />
      <LayoutFooter />
    </NLayout>
  </NLayout>
</template>

<script setup lang="ts">
import LayoutSider from "/@/layouts/default/sider/index.vue";
import LayoutHeader from '/@/layouts/default/header/index.vue';
import LayoutContent from '/@/layouts/default/content/index.vue';
import LayoutFooter from '/@/layouts/default/footer/index.vue';
import { NLayout } from 'naive-ui';
</script>