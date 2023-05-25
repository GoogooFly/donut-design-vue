<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle>
        <NIcon :component="SunOne" size="16"/>
      </NButton>
    </template>
    主题模式
  </NTooltip>
</template>

<script setup lang="ts">
import {NButton, NIcon, NTooltip} from 'naive-ui';
import {SunOne} from '@icon-park/vue-next';</script>