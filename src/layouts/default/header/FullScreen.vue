<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle>
        <NIcon :component="FullScreen" size="16"/>
      </NButton>
    </template>
    全屏
  </NTooltip>
</template>

<script setup lang="ts">
import {NButton, NIcon, NTooltip} from 'naive-ui';
import {FullScreen} from '@icon-park/vue-next';</script>