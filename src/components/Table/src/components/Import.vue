<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton text>
        <Upload size="20" :strokeWidth="3"/>
      </NButton>
    </template>
    导入
  </NTooltip>
</template>

<script setup lang="ts">

import {Upload} from "@icon-park/vue-next";
import {NButton, NTooltip} from "naive-ui";
</script>

<style lang="less" scoped>

</style>