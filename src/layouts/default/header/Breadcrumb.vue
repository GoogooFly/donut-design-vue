<template>
  <NBreadcrumb>
    <NBreadcrumbItem>
      <NDropdown :options="options">
        <div class="cursor-pointer">仪表盘</div>
      </NDropdown>
    </NBreadcrumbItem>
    <NBreadcrumbItem>
      <NDropdown :options="options">
        <div class="cursor-pointer">工作页</div>
      </NDropdown>
    </NBreadcrumbItem>
  </NBreadcrumb>
</template>

<script setup lang="ts">
import {NBreadcrumb, NBreadcrumbItem, NDropdown} from 'naive-ui';
import {reactive} from 'vue';

const options = reactive([
  {label: '工作台', key: 1},
  {label: '分析页', key: 2}
])
</script>