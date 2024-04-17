<template>
  <Card>
    <NForm
        ref="NFormRef"
        inline
        label-placement="left"
        :label-width="80"
        :model="formData"
    >
      <NGrid x-gap="12" :cols="5">
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
          <NFormItem label="手机号码" path="phone">
            <NInput v-model:value="formData.phone" placeholder="请输入手机号码"/>
          </NFormItem>
        </NGi>
        <NGi>
          <NFormItem label="性别" path="sex">
            <NSelect v-model:value="formData.sex" :options="sexOptions" placeholder="请选择性别"/>
          </NFormItem>
        </NGi>
        <NGi>
          <NFormItem label="身份证号" path="idNumber">
            <NInput v-model:value="formData.phone" placeholder="请输入身份证号"/>
          </NFormItem>
        </NGi>
        <NGi>
          <NFormItem label="状态" path="status">
            <NSelect v-model:value="formData.status" :options="statusOptions" placeholder="请选择状态"/>
          </NFormItem>
        </NGi>
        <NGi>
          <NFormItem label="修改人" path="updateUser">
            <NInput v-model:value="formData.updateUser" placeholder="请输入修改人"/>
          </NFormItem>
        </NGi>
        <NGi>
          <NFormItem label="修改时间" path="updateTime">
            <NDatePicker class="w-full" v-model:value="formData.updateTime" placeholder="请选择修改时间" type="datetime" clearable/>
          </NFormItem>
        </NGi>
        <NGi>
          <NFormItem label="创建人" path="createUser">
            <NInput v-model:value="formData.createUser" placeholder="请输入创建人"/>
          </NFormItem>
        </NGi>
        <NGi>
          <NFormItem label="创建时间" path="createTime">
            <NDatePicker class="w-full" v-model:value="formData.createTime" type="datetime" placeholder="请选择创建时间" clearable/>
          </NFormItem>
        </NGi>
        <NGi suffix>
          <NFlex justify="end">
            <NButton type="primary" attr-type="button" @click="onSearch">查询</NButton>
            <NButton @click="onRestForm">重置</NButton>
          </NFlex>
        </NGi>
      </NGrid>
    </NForm>
  </Card>
</template>

<script setup lang="ts">

import {sexOptions, statusOptions} from "/@/views/dashboard/console/databse";
import {NButton, NFlex, NForm, NFormItem, NGi, NGrid, NInput, NSelect, NDatePicker} from "naive-ui";
import {Card} from "/@/components/Card";
import {reactive} from "vue";

const emits = defineEmits(['submit']);

let formData = reactive({
  name: '', // 姓名
  username: '', // 账号
  phone: '', // 手机号
  idNumber: '', // 身份证
  sex: undefined, // 性别
  status: undefined, // 状态 0:禁用 1:启用
  updateUser: '', // 修改人
  updateTime: null, // 修改时间
  createUser: '', // 创建人
  createTime: null, // 创建时间
});

function onSearch() {
  emits('submit', formData);
}

function onRestForm() {
  Object.assign(formData, {
    name: '', // 姓名
    username: '', // 账号
    phone: '', // 手机号
    idNumber: '', // 身份证
    sex: undefined, // 性别
    status: undefined, // 状态 0:禁用 1:启用
    updateUser: '', // 修改人
    updateTime: null, // 修改时间
    createUser: '', // 创建人
    createTime: null, // 创建时间
  })
}
</script>

<style scoped lang="less">

</style>