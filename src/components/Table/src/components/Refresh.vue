<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton text>
        <Refresh size="20" :strokeWidth="3"/>
      </NButton>
    </template>
    刷新
  </NTooltip>
</template>

<script setup lang="ts">

import {Refresh} from "@icon-park/vue-next";
import {NButton, NTooltip} from "naive-ui";
</script>

<style lang="less" scoped>

</style>