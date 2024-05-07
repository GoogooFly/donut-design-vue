<template>
  <div>
    <NCarousel draggable>
      <NImage
          v-for="(item, index) in imgList" :key="index"
          class="carousel-img"
          :src="item.src"
      />
    </NCarousel>
    <NButton @click="onScreenshot" type="primary">截图</NButton>
  </div>
</template>

<script setup lang="ts" name="Analysis">
import {NButton, NCarousel, NImage} from 'naive-ui';
import ScreenShort from 'js-web-screen-shot';
import {ref} from 'vue';
// import {positionInfoType} from "js-web-screen-shot/dist/lib/type/ComponentType";
import {commonUploadApi} from '/@/api/employee';

interface imgType {
  src: string;
}

let imgList = ref<imgType[]>([
  {
    src: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
  },
  {
    src: 'https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg',
  },
]);

function onScreenshot() {
  new ScreenShort({
    enableWebRtc: false,  //是否显示选项框
    level: 9999,  //层级级别
    completeCallback: callback,
    closeCallback: () => {

    }
  });
}

interface imgInfoType {
  base64: string;
  cutInfo: any;
}

async function callback(imgInfo: imgInfoType) {
  try {
    const data = await commonUploadApi(convertBase64UrlToFile(imgInfo.base64));
    imgList.value.push({
      src: data
    });
    console.log(data);
  } catch (err) {

  }
}


// 将base64转换为文件类型
function convertBase64UrlToFile(urlData: string) {
  let bytes = window.atob(urlData.split(',')[1]) //去掉url的头，并转换为byte
  //处理异常,将ascii码小于0的转换为大于0
  let ab = new ArrayBuffer(bytes.length)
  let ia = new Uint8Array(ab)
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i)
  }
  let blob = new Blob([ia], {type: 'image/jpg'});
  let formData = new FormData();
  formData.append('file', blob, 'filename.jpg');
  return formData;
}

</script>

<style scoped lang="less">
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}
</style>