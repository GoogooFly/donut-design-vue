<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton text>
        <Download size="20" :strokeWidth="3"/>
      </NButton>
    </template>
    导出
  </NTooltip>
</template>

<script setup lang="ts">
import {NButton, NTooltip} from 'naive-ui';
import {Download} from '@icon-park/vue-next';

</script>

<style lang="less" scoped>

</style>