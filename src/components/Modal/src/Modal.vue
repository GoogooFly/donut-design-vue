<template>
  <NModal :show="visible" @esc="onEsc" @maskClick="onMaskClick">
    <NCard
        header-class="!p-4 border-b"
        footer-class="!p-4 border-t"
        content-class="!py-4 !px-6"
        :style="`width: ${width};`"
        :title="title"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true">
      <template #header-extra>
        <NFlex>
          <NTooltip trigger="hover">
            <template #trigger>
              <NButton quaternary size="tiny">
                <FullScreenOne size="14"/>
              </NButton>
            </template>
            最大化
          </NTooltip>
          <NTooltip trigger="hover">
            <template #trigger>
              <NButton quaternary size="tiny" @click="onClose">
                <Close size="14"/>
              </NButton>
            </template>
            关闭
          </NTooltip>
        </NFlex>
      </template>
      <template #default>
        <slot name="default"/>
      </template>
      <template #footer>
        <NFlex justify="end">
          <slot name="footer"/>
        </NFlex>
      </template>
    </NCard>
  </NModal>
</template>

<script setup lang="ts">
import {NModal, NCard, NButton, NTooltip, NFlex} from 'naive-ui';
import {Download, Close, FullScreenOne} from "@icon-park/vue-next";

withDefaults(defineProps<{
  title: string;
  width?: string;
  height?: string;
  visible: boolean;
}>(), {
  title: '新增员工',
  width: '650px',
  height: '500px',
  visible: false,
});

const emits = defineEmits(['update:visible', 'beforeClose']);

function onClose() {
  emits('beforeClose', false);
}

function onEsc() {
  emits('beforeClose', false);
}
function onMaskClick(){
  emits('beforeClose', false);
}
</script>

<style scoped lang="less">

</style>