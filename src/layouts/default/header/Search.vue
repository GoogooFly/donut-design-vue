<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle>
        <NIcon :component="Search" size="16"/>
      </NButton>
    </template>
    搜索
  </NTooltip>
</template>

<script setup lang="ts">
import {NButton, NIcon, NTooltip} from 'naive-ui';
import {Search} from '@icon-park/vue-next';</script>