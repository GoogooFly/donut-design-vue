<template>
  <NTooltip trigger="hover">
    <template #trigger>
      <NButton circle @click="visible = true">
        <NIcon :component="SettingTwo" size="16"/>
      </NButton>
    </template>
    页面配置
  </NTooltip>
  <NDrawer v-model:show="visible" :width="330" placement="right">
    <NDrawerContent title="项目配置" :native-scrollbar="false" closable>
      <NDivider>主题</NDivider>
      <NDivider>导航栏模式</NDivider>
      <NDivider>界面功能</NDivider>
      <NDivider>界面显示</NDivider>
      <NDivider>动画</NDivider>
      <NDivider></NDivider>
      <NSpace vertical>
        <NButton type="primary" block>
          <template #icon>
            <NIcon :component="Copy" :size="15" />
          </template>
          拷贝
        </NButton>
        <NButton type="warning" block>
          <template #icon>
            <NIcon :component="Refresh" :size="15" />
          </template>
          重置
        </NButton>
        <NButton type="error" block>
          <template #icon>
            <NIcon :component="Refresh" :size="15" />
          </template>
          清空缓存并返回登录页
        </NButton>
      </NSpace>
    </NDrawerContent>
  </NDrawer>
</template>

<script setup lang="ts">
import {NButton, NDivider, NDrawer, NDrawerContent, NIcon, NTooltip, NSpace} from 'naive-ui';
import {Copy, Refresh, SettingTwo} from '@icon-park/vue-next';
import {ref} from 'vue';

let visible = ref(false);
</script>