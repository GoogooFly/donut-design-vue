<template>

  <NPopselect :options="options" trigger="click">
    <NTooltip trigger="hover">
      <template #trigger>
        <NButton circle>
          <NIcon :component="Translate" size="16"/>
        </NButton>
      </template>
      语言
    </NTooltip>
  </NPopselect>
</template>

<script setup lang="ts">
import {NButton, NIcon, NTooltip, NPopselect} from 'naive-ui';
import { Translate } from '@icon-park/vue-next';
import {reactive} from "vue";

const options = reactive([
  {
    label: '简体中文',
    value: 'Drive My Car'
  },
  {
    label: 'English',
    value: 'Norwegian Wood'
  }]);
</script>