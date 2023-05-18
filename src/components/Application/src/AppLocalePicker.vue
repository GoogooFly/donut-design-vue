<template>
  <NPopselect :options="options" trigger="click">
    <div class="cursor-pointer flex items-center justify-center">
      <Translate theme="outline" size="24" fill="#333"/>
    </div>
  </NPopselect>
</template>

<script setup lang="ts">
import { Translate } from '@icon-park/vue-next';
import { NPopselect  } from 'naive-ui';
import { reactive } from 'vue';

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