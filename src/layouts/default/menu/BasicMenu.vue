<template>
  <NMenu
      :indent="12"
      v-model:value="activeKey"
      :options="menuOptions"
      :expanded-keys="getOpenKeys"
      :inverted="false"
      :collapsed-icon-size="22"
      @update:value="clickMenuItem"
      @update:expanded-keys="menuExpanded"
  />
</template>

<script setup lang="ts">
import type {Component} from 'vue'
import {h, ref, watchEffect} from 'vue';
import type {MenuOption} from 'naive-ui'
import {NIcon, NMenu} from 'naive-ui';
import type {RouteRecordRaw} from 'vue-router';
import {useRouter, useRoute} from 'vue-router';

const router = useRouter();
const route = useRoute();

const getOpenKeys = route.matched && route.matched.length ? route.matched.map((item) => item.name) : [];
const activeKey = ref<string | null>(route.name as string);

function renderIcon(icon: Component) {
  return () => h(NIcon, null, {default: () => h(icon)})
}

const menuOptions: MenuOption[] = [];

function getRoutes(routes: readonly RouteRecordRaw[]): MenuOption[] {
  return routes.map((item): MenuOption => {
    return {
      label: item.meta?.title,
      key: item.name as string,
      icon: renderIcon(item.meta?.icon as Component),
      show: !item.meta?.hidden,
      children: item.children ? getRoutes(item.children) : undefined
    }
  })
}

watchEffect(() => {
  let route = getRoutes(router.options.routes);
  Object.assign(menuOptions, route);
})

function clickMenuItem(key: string) {
  if (/http(s)?:/.test(key)) {
    window.open(key);
  } else {
    router.push({name: key});
  }
}

function menuExpanded(keys: string[]) {
  console.log(keys)
}

</script>