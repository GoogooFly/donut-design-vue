<template>
  <div class="relative h-screen w-screen overflow-hidden">
    <NLayout has-sider position="absolute">
      <LayoutSider/>

      <NLayout>
        <LayoutHeader/>
        <NLayout :native-scrollbar="false" position="absolute" class="!top-100px">
          <LayoutContent/>
<!--          <LayoutFooter/>-->
        </NLayout>
      </NLayout>
    </NLayout>
  </div>
</template>

<script setup lang="ts">
import LayoutSider from "/@/layouts/default/sider/index.vue";
import LayoutHeader from '/@/layouts/default/header/index.vue';
import LayoutContent from '/@/layouts/default/content/index.vue';
import LayoutFooter from '/@/layouts/default/footer/index.vue';
import {NLayout} from 'naive-ui';</script>