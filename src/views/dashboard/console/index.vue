<template>
  <NRow :gutter="[16, 16]">
    <NCol :span="18">
      <div class="light-green" />
    </NCol>
    <NCol :span="6">
      <div class="green" />
    </NCol>
  </NRow>
</template>

<script setup lang="ts">
import {NCol, NRow} from 'naive-ui';</script>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>