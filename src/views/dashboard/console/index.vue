<template>
  <NFlex vertical>
    <QueryForm ref="QueryFormRef" @submit="onQueryFormSubmit" @restForm="onQueryFormRestForm"/>
    <BasicTable :loading="isLoading"
                :columns="columns"
                v-model:tableData="tableData"
                :pagination="pagination"
                @update:page="onUpdatePage"
                @update:page-size="onUpdatePageSize"
                @refresh="onRefresh"
                border stripe>
      <template #buttons>
        <NButton type="primary" @click="onAddEmployee">
          <template #icon>
            <Plus/>
          </template>
          添加
        </NButton>

        <NButton type="error">
          <template #icon>
            <Delete/>
          </template>
          删除
        </NButton>
      </template>
      <template #sex="{ row }">
        <NTag v-if="row.sex == 1" :color="{ color: '#ecf5ff', textColor: '#409eff', borderColor: '#d9ecff' }">男</NTag>
        <NTag v-else :color="{ color: '#fef0f0', textColor: '#f56c6c', borderColor: '#fde2e2' }">女</NTag>
      </template>
      <template #updateTime="{ row }">
        {{ dayjs(row.updateTime).format('YYYY-MM-DD HH:mm:ss') }}
      </template>
      <template #createTime="{ row }">
        {{ dayjs(row.createTime).format('YYYY-MM-DD HH:mm:ss') }}
      </template>
      <template #action="{ row }">
        <NFlex justify="center">
          <NButton type="warning" size="small" @click="onEdit(row)">
            <template #icon>
              <Edit :strokeWidth="3"/>
            </template>
            编辑
          </NButton>

          <NPopconfirm @positiveClick="onDelete(row)">
            <template #trigger>
              <NButton type="error" size="small">
                <template #icon>
                  <Delete :strokeWidth="3"/>
                </template>
                删除
              </NButton>
            </template>
            是否确定删除？
          </NPopconfirm>
          <NDropdown trigger="hover" :options="moreDropdownOptions" @select="onUpdateStatus(row, $event)">
            <NButton type="info" size="small">
              <template #icon>
                <MoreFour :strokeWidth="3"/>
              </template>
              更多
            </NButton>
          </NDropdown>

        </NFlex>
      </template>
      <template #status="{ row }">
        <NTag type="success" v-if="row.status">启用</NTag>
        <NTag type="error" v-else>禁用</NTag>
      </template>
    </BasicTable>
    <FormModal ref="FormModalRef" @submit="onFormModalSubmit"/>
  </NFlex>
</template>

<script setup lang="ts">
import {NFlex, NButton, NTag, NPopconfirm, NDropdown} from 'naive-ui';
import {Plus, Edit, Delete, MoreFour} from '@icon-park/vue-next';
import {BasicTable} from '/@/components/Table';
import {reactive, ref, onMounted} from 'vue';
import dayjs from 'dayjs';
import {
  employeePageApi,
  employeeAddApi,
  employeeDeleteApi,
  employeeUpdateStatusApi,
  employeeUpdateApi
} from '/@/api/employee';
import {columns} from './columns';
import FormModal from './components/FormModal.vue';
import {moreDropdownOptions} from './databse';
import QueryForm from "/@/views/dashboard/console/components/QueryForm.vue";

let FormModalRef = ref();
let tableData = reactive([]);

let pagination = reactive({
  currentPage: 1,
  pageSize: 10,
  total: 100,
  pageSizes: [10, 20, 30, 40],
});
let formData = reactive({
  name: null, // 姓名
  username: null, // 账号
  phone: null, // 手机号
  idNumber: null, // 身份证
  sex: null, // 性别
  status: null, // 状态 0:禁用 1:启用
  updateUser: null, // 修改人
  updateTime: null, // 修改时间
  createUser: null, // 创建人
  createTime: null, // 创建时间
});

let isLoading = ref(false);


function onUpdatePage() {

}

function onUpdatePageSize(row: any) {
  console.log(row);
}

function onAddEmployee() {
  FormModalRef.value.onUseModal({
    type: "add",
    title: "添加员工"
  });
}

function onEdit(options: any) {
  FormModalRef.value.onUseModal({
    type: "edit",
    title: "编辑员工",
    options,
  });
}

async function onRefresh() {
  Object.assign(formData, {
    name: null, // 姓名
    username: null, // 账号
    phone: null, // 手机号
    idNumber: null, // 身份证
    sex: null, // 性别
    status: null, // 状态 0:禁用 1:启用
    updateUser: null, // 修改人
    updateTime: null, // 修改时间
    createUser: null, // 创建人
    createTime: null, // 创建时间
  })
  await onLoad();
}

async function onUpdateStatus(employee, status: number) {
  if (employee.status === status) return;
  try {
    const data = await employeeUpdateStatusApi(employee.id, status);
    await onLoad();
  } catch (err) {

  } finally {

  }
}

async function onDelete(options: any) {
  const {id} = options;
  try {
    const data = await employeeDeleteApi(id);
    await onLoad();
    console.log(data)
  } catch (err) {

  } finally {

  }
}

async function onLoad() {
  try {
    isLoading.value = true;
    let params = {
      page: pagination.currentPage,
      pageSize: pagination.pageSize,
    };
    Object.assign(params, formData);
    const data = await employeePageApi(params);
    pagination.total = data.total;
    tableData = reactive(data.records);
  } catch (err) {
    console.log(err)
  } finally {
    isLoading.value = false;
  }
}

function onFormModalSubmit({formData, type}) {
  if (type === "add") {
    onAddEmployeeSubmit(formData);
  } else if (type === "edit") {
    onUpdateEmployeeSubmit(formData);
  }
}

async function onUpdateEmployeeSubmit(formData) {
  try {
    const data = await employeeUpdateApi(formData);
    await onLoad()
  } catch (err) {

  } finally {

  }
}

async function onAddEmployeeSubmit(formData) {
  try {
    const data = await employeeAddApi(formData);
    await onLoad();
    console.log(data);
  } catch (err) {

  } finally {

  }
}

async function onQueryFormSubmit(options) {
  console.log(options)
  Object.assign(formData, options);
  await onLoad();
}

async function onQueryFormRestForm(options) {
  Object.assign(formData, options);
}

onMounted(() => {
  onLoad();
})
</script>

<style lang="less" scoped>

</style>