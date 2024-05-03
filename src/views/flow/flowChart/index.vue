<template>
  <div>
    <NSpace class="py-2 px-5" :wrap-item="false">
      <NTooltip trigger="hover" placement="bottom">
        <template #trigger>
          <NButton circle>
            <template #icon>
              <NIcon :component="ZoomIn" size="16"/>
            </template>
          </NButton>
        </template>
        放大
      </NTooltip>
      <NTooltip trigger="hover" placement="bottom">
        <template #trigger>
          <NButton circle>
            <template #icon>
              <NIcon :component="ZoomOut" size="16"/>
            </template>
          </NButton>
        </template>
        缩小
      </NTooltip>
      <NTooltip trigger="hover" placement="bottom">
        <template #trigger>
          <NButton circle>
            <template #icon>
              <NIcon :component="Refresh" size="16"/>
            </template>
          </NButton>
        </template>
        刷新
      </NTooltip>
      <NDivider class="!h-8" vertical/>
      <NTooltip trigger="hover" placement="bottom">
        <template #trigger>
          <NButton circle>
            <template #icon>
              <NIcon :component="Back" size="16"/>
            </template>
          </NButton>
        </template>
        后退
      </NTooltip>
      <NTooltip trigger="hover" placement="bottom">
        <template #trigger>
          <NButton circle>
            <template #icon>
              <NIcon :component="Next" size="16"/>
            </template>
          </NButton>
        </template>
        前进
      </NTooltip>
      <NDivider class="!h-9" vertical/>
      <NTooltip trigger="hover" placement="bottom">
        <template #trigger>
          <NButton circle>
            <template #icon>
              <NIcon :component="DownloadFour" size="16"/>
            </template>
          </NButton>
        </template>
        下载
      </NTooltip>

      <NTooltip trigger="hover" placement="bottom">
        <template #trigger>
          <NButton circle>
            <template #icon>
              <NIcon :component="FileDisplayOne" size="16"/>
            </template>
          </NButton>
        </template>
        查看数据
      </NTooltip>

      <NTooltip trigger="hover" placement="bottom">
        <template #trigger>
          <NButton circle>
            <template #icon>
              <NIcon :component="Help" size="16"/>
            </template>
          </NButton>
        </template>
        帮助
      </NTooltip>
    </NSpace>

    <div class="relative">
      <div class="absolute left-5 top-5 rounded shadow z-index-1 bg-white px-4">
        <div class="py-3 flex flex-col justify-between align-center" ref="DndContainerRef">
          <NForm>
            <NFormItem label="标题">
              <NInput v-model:value="formState.label" clearable/>
            </NFormItem>
            <NFormItem label="类型">
              <NSelect v-model:value="formState.shape" :options="shapeOptions" />
            </NFormItem>
          </NForm>

          <NButton @mousedown="startDrop" text>
            <template #icon>
              <NIcon :component="HandDrag" size="18"/>
            </template>
          </NButton>
        </div>
      </div>
      <div ref="FlowChartRef" class="rounded overflow-hidden"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, unref, reactive} from 'vue';
import {NButton, NDivider, NForm, NFormItem, NIcon, NInput, NSpace, NTooltip, NSelect} from 'naive-ui';
import {Back, DownloadFour, FileDisplayOne, Next, Refresh, ZoomIn, ZoomOut,HandDrag, Help} from '@icon-park/vue-next';
import {GFlowChart} from './FlowChart';

const FlowChartRef = ref<HTMLElement | null>(null);
const DndContainerRef = ref<HTMLElement | null>(null);
let defGFlowChart: any = null;

const shapeOptions = [
  { label: "正方形",value: "rect" },
  { label: "圆圈",value: "circle" }
]

let formState = reactive({
  label: "默认标题",
  shape: "rect"
})

onMounted(() => {
  defGFlowChart = new GFlowChart(unref(FlowChartRef) as HTMLElement, unref(DndContainerRef) as HTMLElement);
  defGFlowChart.addNode({
    label: "开始",
    shape: "circle"
  })
})

function startDrop(event) {
  defGFlowChart.startDrop(event, formState);
}

</script>