<template>
  <NPopselect :options="options" trigger="click">
    <div class="cursor-pointer flex items-center justify-center text-[#333] dark:text-[#f6f6f6]">
      <Translate theme="outline" size="24"/>
    </div>
  </NPopselect>
</template>

<script setup lang="ts" name="AppLocalePicker">
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