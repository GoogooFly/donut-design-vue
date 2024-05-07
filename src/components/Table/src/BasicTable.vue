<template>
  <Card>
    <NFlex justify="space-between" class="mb-3">
      <NFlex>
        <slot name="buttons"/>
      </NFlex>
      <NFlex>
        <NSpace :size="15" align="end">
          <Import/>
          <Export/>
          <Print/>
          <Refresh @refresh="onRefresh"/>
          <FullScreen/>
          <Setting/>
        </NSpace>
      </NFlex>
    </NFlex>
    <VxeTable :border="border" :stripe="stripe" :data="tableData" :loading="loading">
      <VxeColumn
          v-for="({ title, field, slots, type, width, align, showOverflow, fixed }, index) in columns"
          :key="index"
          :title="title"
          :field="field"
          :type="type"
          :width="width"
          :align="align"
          :show-overflow="showOverflow"
          :fixed="fixed"
      >
        <template v-if="slots && slots.default" #default="scope">
          <slot :name="slots.default" v-bind="scope"/>
        </template>
        <template v-if="type === 'checkbox'" #header>
          <NCheckbox></NCheckbox>
        </template>
        <template #default="scope" v-if="type === 'checkbox'">
          <NCheckbox></NCheckbox>
        </template>
      </VxeColumn>
    </VxeTable>
    <NPagination
        class="mt-3 flex items-center justify-end"
        v-model:page="pagination.currentPage"
        v-model:page-size="pagination.pageSize"
        :page-count="pagination.total"
        show-size-picker
        show-quick-jumper
        :page-sizes="pagination.pageSizes"
    />
  </Card>
</template>

<script setup lang="ts" name="BasicTable">
import {VxeTable, VxeColumn} from 'vxe-table';
import {NButton, NFlex, NPagination, NSpace, NCheckbox} from 'naive-ui';
import {Import, Export, Print, Refresh, FullScreen, Setting} from './components';
import {Card} from '/@/components/Card';
import type {IProps} from './types/props';
import {basicProps} from './props';

const emits = defineEmits(['update:pagination', 'update:tableData', 'refresh']);

withDefaults(defineProps<IProps>(), basicProps);


function onRefresh(){
  emits('refresh');
}
</script>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}

.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>