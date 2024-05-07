<template>
  <NButton>
    <slot/>
  </NButton>
</template>

<script setup lang="ts" name="BasicButton">
import {NButton} from 'naive-ui';
import type {BasicButtonProps} from '/@/components/Button/src/types/button';
import {basicButtonProps} from '/@/components/Button/src/props';

withDefaults(defineProps<BasicButtonProps>(), basicButtonProps);
</script>

<style scoped lang="less">

</style>