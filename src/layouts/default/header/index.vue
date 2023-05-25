<template>
  <NLayoutHeader bordered>
    <NSpace class="w-full px-4 h-60px border-b" align="center" justify="space-between">
      <Breadcrumb />
      <NSpace align="center" :item-style="{ height: '100%', display:'flex', alignItems: 'center' }">
        <Search/>
        <Locale />
        <ThemeMode />
        <Notify />
        <FullScreen />
        <User />
        <Configuration />
      </NSpace>
    </NSpace>
    <Tabs />
  </NLayoutHeader>
</template>

<script setup lang="ts">
import {NLayoutHeader, NSpace} from 'naive-ui';
import Search from '/@/layouts/default/header/Search.vue';
import Notify from '/@/layouts/default/header/Notify.vue';
import FullScreen from '/@/layouts/default/header/FullScreen.vue';
import User from '/@/layouts/default/header/User.vue';
import Configuration from "/@/layouts/default/header/Configuration.vue";
import Locale from '/@/layouts/default/header/Locale.vue';
import ThemeMode from "/@/layouts/default/header/ThemeMode.vue";
import Breadcrumb from "/@/layouts/default/header/Breadcrumb.vue";
import Tabs from '/@/layouts/default/tabs/index.vue';

</script>