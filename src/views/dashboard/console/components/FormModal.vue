<template>
  <BasicModal v-model:visible="modalOptions.visible" :title="modalOptions.title" @beforeClose="onBeforeClose">
    <template #default>
      <NForm
          ref="NFormRef"
          inline
          :rules="formModalRules"
          label-placement="left"
          :label-width="80"
          :model="formData"
          require-mark-placement="left"
      >
        <NGrid x-gap="12" :cols="2">
          <NGi>
            <NFormItem label="姓名" path="name">
              <NInput v-model:value="formData.name" placeholder="请输入姓名"/>
            </NFormItem>
          </NGi>
          <NGi>
            <NFormItem label="账号" path="username">
              <NInput v-model:value="formData.username" placeholder="请输入账号"/>
            </NFormItem>
          </NGi>
          <NGi>
            <NFormItem label="手机号" path="phone">
              <NInput v-model:value="formData.phone" placeholder="请输入手机号"/>
            </NFormItem>
          </NGi>
          <NGi>
            <NFormItem label="身份证号" path="idNumber">
              <NInput v-model:value="formData.idNumber" placeholder="请输入身份证号"/>
            </NFormItem>
          </NGi>
          <NGi>
            <NFormItem label="性别" path="sex">
              <NSelect v-model:value="formData.sex" :options="sexOptions" placeholder="请选择性别"/>
            </NFormItem>
          </NGi>
          <NGi>
            <NFormItem label="状态" path="status">
              <NSelect v-model:value="formData.status" :options="statusOptions" placeholder="请选择状态"/>
            </NFormItem>
          </NGi>
        </NGrid>
      </NForm>
    </template>

    <template #footer>
      <NButton @click="onRestForm" dashed>重置</NButton>
      <NButton @click="onBeforeClose">关闭</NButton>
      <NButton type="primary" @click="onSubmit">保存</NButton>
    </template>
  </BasicModal>
</template>

<script setup lang="ts">
import {BasicModal} from '/@/components/Modal';
import {NButton, NForm, NFormItem, NGi, NGrid, NInput, NSelect, useDialog} from 'naive-ui';
import {reactive, ref} from 'vue';
import {sexOptions, statusOptions} from '../databse';
import {formModalRules} from '../rules';

defineExpose({onUseModal});
const emits = defineEmits(['submit']);
let NFormRef = ref();
const dialog = useDialog();

let modalOptions = reactive({
  visible: false,
  title: "",
  type: "",
});

let formData = reactive({
  name: '', // 姓名
  username: '', // 账号
  phone: '', // 手机号
  idNumber: '', // 身份证
  sex: undefined, // 性别
  status: undefined, // 状态 0:禁用 1:启用
});

function onUseModal({type, title, options}: {
  type: string;
  title: string;
  options?: any;
}) {
  onRestForm();
  modalOptions.visible = true;
  modalOptions.title = title;
  modalOptions.type = type;
  if (type !== 'edit') return;
  Object.assign(formData, options);
}

function onBeforeClose() {
  dialog.warning({
    title: '提示',
    content: '数据尚未保存，确定关闭吗？',
    positiveText: '确定',
    negativeText: '不确定',
    onPositiveClick: () => {
      modalOptions.visible = false;
      onRestForm();
    }
  })
}

async function onSubmit() {
  NFormRef.value?.validate((errors) => {
    if (errors) return;
    modalOptions.visible = false;
    emits('submit', {formData, type: modalOptions.type});
    onRestForm();
  })
}

function onRestForm() {
  NFormRef.value?.restoreValidation();
  Object.assign(formData, {
    name: '', // 姓名
    username: '', // 账号
    phone: '', // 手机号
    idNumber: '', // 身份证
    sex: undefined, // 性别
    status: undefined, // 状态 0:禁用 1:启用
    password: '', // 密码
    verifyPassword: '', // 确认密码
  });
}
</script>

<style scoped lang="less">

</style>