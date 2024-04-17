<template>
  <div class="cursor-pointer py-1 flex items-center justify-center">
    <NImage :src="AppLogo" :width="size * 2" :height="size * 2" class="rounded-full overflow-hidden"/>
    <div
        v-if="showTitle"
        class="h-full ml-2 font-bold text-24px dark:text-[#f6f6f6] truncate"
        :style="{ 'font-size': `${size}px`}"
        :class="{'font-bold': bold}"
    >
      Donut Design
    </div>
  </div>
</template>

<script setup lang="ts">
import {NImage, NSpace} from 'naive-ui';
import AppLogo from "/@/assets/images/logo.png";

withDefaults(
    defineProps<{
      showTitle?: boolean;
      bold?: boolean;
      size?: number;
    }>(),
    {
      showTitle: true,
      bold: true,
      size: 24
    }
)
</script>