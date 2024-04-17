<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton text>
        <Printer size="20" :strokeWidth="3"/>
      </NButton>
    </template>
    打印
  </NTooltip>
</template>

<script setup lang="ts">

import {NButton, NTooltip} from "naive-ui";
import {Printer} from "@icon-park/vue-next";
</script>

<style lang="less" scoped>

</style>