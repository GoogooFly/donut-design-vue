<template>
  <NRow>
    <NCol :span="22">
      <NScrollbar x-scrollable trigger="hover" class="h-10 leading-10">
        <NSpace class="px-2" :wrap="false" align="center">
          <NTag v-for="itm in 30" :key="itm" closable>工作台</NTag>
        </NSpace>
      </NScrollbar>
    </NCol>
    <NCol :span="2">
      <NSpace class="h-full" align="center" justify="center">
        <NButtonGroup size="small" tertiary>
          <NButton>
            <template #icon>
              <NIcon :component="Refresh" size="18"/>
            </template>
          </NButton>
          <NDropdown
              :options="options"
              placement="bottom-start"
              trigger="click"
              :show-arrow="true"
          >
            <NButton>
              <template #icon>
                <NIcon :component="Down" size="18"/>
              </template>
            </NButton>
          </NDropdown>
          <NButton>
            <template #icon>
              <NIcon :component="FullScreenOne" size="18"/>
            </template>
          </NButton>
        </NButtonGroup>
      </NSpace>
    </NCol>
  </NRow>
</template>

<script setup lang="ts">
import {Down, FullScreenOne, Refresh, Close, ToLeft, ToRight, Minus, DistributeVertically} from '@icon-park/vue-next';
import {NButton, NButtonGroup, NCol, NDropdown, NIcon, NRow, NScrollbar, NSpace, NTag} from 'naive-ui';
import type {Component} from 'vue';
import {h, reactive} from 'vue';

function renderIcon(component: Component) {
  return () => h(NIcon, null, {
    default: () => h(component)
  })
}

const options = reactive([
  {key: '0', label: '重新加载', icon: renderIcon(Refresh)},
  {key: '1', label: '关闭标签页', icon: renderIcon(Close)},
  {key: 'd1', type: 'divider'},
  {key: '2', label: '关闭左侧标签页', icon: renderIcon(ToLeft)},
  {key: '3', label: '关闭右侧标签页', icon: renderIcon(ToRight)},
  {key: 'd1', type: 'divider'},
  {key: '4', label: '关闭其它标签页', icon: renderIcon(DistributeVertically)},
  {key: '5', label: '关闭全部标签页', icon: renderIcon(Minus)},
])
</script>