<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton text>
        <SettingTwo size="20" :strokeWidth="3"/>
      </NButton>
    </template>
    设置
  </NTooltip>
</template>

<script setup lang="ts">

import {NButton, NTooltip} from "naive-ui";
import {SettingTwo} from "@icon-park/vue-next";
</script>

<style lang="less" scoped>

</style>