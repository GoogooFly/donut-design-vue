<template>
  <LoginFormTitle v-show="getShow"/>
  <NForm v-show="getShow" :show-label="false">
    <NFormItem class="enter-x">
      <NInput size="large" placeholder="账号" clearable v-model:value="formState.username">
        <template #prefix>
          <NIcon :component="User" :size="18" color="#c2c2c2"/>
        </template>
      </NInput>
    </NFormItem>
    <NFormItem class="enter-x">
      <NInput size="large" type="password" placeholder="密码" clearable show-password-on="mousedown"
              v-model:value="formState.password">
        <template #prefix>
          <NIcon :component="Lock" :size="18" color="#c2c2c2"/>
        </template>
      </NInput>
    </NFormItem>
    <NRow class="enter-x">
      <NCol :span="12">
        <NFormItem>
          <NCheckbox label="记住我" v-model:checked="formState.remember"/>
        </NFormItem>
      </NCol>
      <NCol :span="12">
        <NFormItem>
          <div class="w-full flex items-center justify-end">
            <NButton size="small" type="primary" text @click="setLoginState(LoginStateEnum.RESET_PASSWORD)">忘记密码？
            </NButton>
          </div>
        </NFormItem>
      </NCol>
    </NRow>
    <NFormItem class="enter-x">
      <NButton size="large" :loading="loading" type="primary" block @click="onSubmit">登录</NButton>
    </NFormItem>
    <NRow :gutter="[12, 0]" class="enter-x">
      <NCol :span="8">
        <NButton size="small" @click="setLoginState(LoginStateEnum.MOBILE)" block>手机登录</NButton>
      </NCol>
      <NCol :span="8">
        <NButton size="small" @click="setLoginState(LoginStateEnum.QR_CODE)" block>二维码登录</NButton>
      </NCol>
      <NCol :span="8">
        <NButton size="small" @click="setLoginState(LoginStateEnum.REGISTER)" block>注册</NButton>
      </NCol>
    </NRow>
    <NDivider class="text-[#00000073] text-12px enter-x">其它登录方式</NDivider>

    <NSpace class="w-full" justify="space-evenly">
      <NButton class="enter-x" size="large" circle>
        <template #icon>
          <Github class="flex items-center justify-center" theme="outline" size="24" fill="#888888"/>
        </template>
      </NButton>
      <NButton class="enter-x" size="large" circle>
        <template #icon>
          <Bytedance class="flex items-center justify-center" theme="outline" size="24" fill="#888888"/>
        </template>
      </NButton>
      <NButton class="enter-x" size="large" circle>
        <template #icon>
          <Gitlab class="flex items-center justify-center" theme="outline" size="24" fill="#888888"/>
        </template>
      </NButton>
      <NButton class="enter-x" size="large" circle>
        <template #icon>
          <Tiktok class="flex items-center justify-center" theme="outline" size="24" fill="#888888"/>
        </template>
      </NButton>
    </NSpace>
  </NForm>
</template>

<script setup lang="ts" name="LoginForm">
import {computed, unref, reactive, ref} from 'vue';
import LoginFormTitle from "/@/views/sys/login/LoginFormTitle.vue";
import {
  NButton,
  NCheckbox,
  NCol,
  NDivider,
  NForm,
  NFormItem,
  NInput,
  NRow,
  NSpace,
  NIcon,
  useNotification
} from 'naive-ui';
import {Bytedance, Github, Gitlab, Lock, Tiktok, User} from '@icon-park/vue-next';
import {LoginStateEnum, useLoginState} from '/@/views/sys/login/useLogin';
import {employeeLogin} from '/@/api/employee';
import {useUserStore} from '/@/store/modules/user';
import {useRouter} from 'vue-router';
import {PageEnum} from '/@/enums/pageEnum';

const userStore = useUserStore();
const router = useRouter();
const createNotification = useNotification();
const {getLoginState, setLoginState} = useLoginState();
const getShow = computed(() => unref(getLoginState) === LoginStateEnum.LOGIN);
const loading = ref(false);

const formState = reactive({
  username: "admin",
  password: "123456",
  remember: true,
})

async function onSubmit() {
  try {
    loading.value = true;
    let params = {
      username: formState.username,
      password: formState.password
    }
    const data = await employeeLogin(params);
    const userInfo = userStore.login(data.token, data.userInfo);
    await router.replace(PageEnum.BASE_HOME);
    createNotification.success({
      title: "登录成功",
      content: `欢迎回来：${userInfo.name}`,
      duration: 3000,
      keepAliveOnHover: true
    })

  } catch (err: any) {
    console.log(err);
  } finally {
    loading.value = false;
  }
}
</script>