<template>
  <NPopover trigger="click" raw>
    <template #trigger>
      <NTooltip trigger="hover">
        <template #trigger>
          <NBadge dot>
            <NButton circle>
              <NIcon :component="Remind" size="16"/>
            </NButton>
          </NBadge>
        </template>
        消息通知
      </NTooltip>
    </template>
    <div class="min-w-100 pt-4 pb-2 bg-white">
      <NTabs default-value="0" type="line" :tabs-padding="20" pane-class="!px-2 !pb-3">
        <NTabPane name="0" tab="通知（5）">
          <div class="border-1px border-solid border-gray-200 rounded">
            <NSpace class="px-4 py-2" v-for="itm in 5" :key="itm" :class="{ 'border-b': itm !== 5 }">
              <NSpace align="center" justify="center" class="w-12" :wrap-item="false">
                <NImage :width="35" :height="35" :src="AppLogo"/>
              </NSpace>
              <NSpace vertical>
                <div class="text-base">你收到了 14 份新周报</div>
                <div class="text-gray-400 text-xs">今天 10:35</div>
              </NSpace>
            </NSpace>
          </div>
        </NTabPane>
        <NTabPane name="1" tab="消息（6）">
          Hey Jude
        </NTabPane>
        <NTabPane name="2" tab="待办（7）">
          七里香
        </NTabPane>
        <template #prefix></template>
        <template #suffix>
          <NButton text class="mr-5">清空</NButton>
        </template>
      </NTabs>

      <NSpace align="center" class="w-full px-2" item-style="width: 100%;">
        <NButtonGroup class="w-1/2">
          <NButton block>全部已读</NButton>
          <NButton block>查看更多</NButton>
        </NButtonGroup>
      </NSpace>
    </div>
  </NPopover>
</template>

<script setup lang="ts">
import {
  NBadge,
  NButton,
  NButtonGroup,
  NIcon,
  NImage,
  NPopover,
  NSpace,
  NTabPane,
  NTabs,
  NTooltip
} from 'naive-ui';
import {Remind} from '@icon-park/vue-next';
import AppLogo from '/@/assets/images/logo.png';

</script>