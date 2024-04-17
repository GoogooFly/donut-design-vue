<template>
  <NLayoutContent :native-scrollbar="false">
    <div class="bg-[#f1f2f4] px-5 py-4">
      <RouterView/>
    </div>
  </NLayoutContent>
</template>

<script setup lang="ts">
import {NLayoutContent, NLayout} from 'naive-ui';</script>