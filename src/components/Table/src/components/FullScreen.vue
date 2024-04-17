<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton text>
        <FullScreenOne size="20" :strokeWidth="3"/>
      </NButton>
    </template>
    全屏
  </NTooltip>
</template>

<script setup lang="ts">

import {NButton, NTooltip} from "naive-ui";
import {FullScreenOne} from "@icon-park/vue-next";
</script>

<style lang="less" scoped>

</style>