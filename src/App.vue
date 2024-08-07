<script setup>
import { reactive } from 'vue'
const jsonObject = window.jsonObject ?? { "cancel": "", "reason": "test", "eform_pase_ip": "localhost", "eform_taskId": "Tsk000000325686", "agency_visible": "true", "endDate": "2024-08-06 00:00:00.0", "department_enable": "false", "role_enable": "false", "hours_description": "時數", "eform_user_rolename": "系統管理員", "writeDate": "2024-08-06 00:00:00.0", "memo": "", "agency_description": "代理人", "writeDate_description": "填單日期", "role_visible": "true", "memo_enable": "true", "agree_visible": "true", "cancel_description": "作廢", "eform_task_state": "假單填寫完畢", "endDate_description": "結束日期", "agree_enable": "true", "eform_web_url": "http://127.0.0.1:8080/WebAgenda", "eform_artInsId": "Ans000000221649", "name_visible": "true", "name_enable": "false", "eform_user_depname": "差勤系統", "agree": "on", "agency_enable": "false", "eform_webagenda_host": "http://127.0.0.1:8080", "eform_user_class": "class com.flowring.model.eform.User", "writeDate_enable": "false", "eform_freqApId": "", "startDate_enable": "false", "name": "test", "hours_enable": "false", "eform_user_depid": "PRJ00011155697998565", "reject_enable": "true", "eform_user_id": "administrator", "eform_readOnly": "false", "startDate": "2024-08-06 00:00:00.0", "eform_user_roleid": "ROL00001218675753563", "cancel_enable": "false", "role": "test", "serial_description": "單號", "days_enable": "false", "cancel_visible": "true", "startDate_visible": "true", "eform_pase_firewallip": "localhost", "role_description": "職務", "endDate_visible": "true", "startDate_description": "開始日期", "eform_pase_port": "1099", "department_description": "部門", "reason_visible": "true", "reject": "on", "eform_artId": "ART00741132819347347", "hours_visible": "true", "reason_enable": "false", "name_description": "姓名", "reject_visible": "true", "eform_class": "class com.flowring.model.eform.Eform", "eform_user_name": "System Administrator", "department": "test", "memo_visible": "true", "hours": "0", "days_description": "天數", "agency": "A1", "days_visible": "true", "reject_description": "駁回", "reason_description": "請假原因", "department_visible": "true", "eform_rootTaskId": "Tsk000000325682", "eform_user_memberid": "Administrator", "eform_processId": "PRO02481132823178963", "eform_pase_firewallport": "1099", "eform_artifact_host": "http://127.0.0.1:8080", "serial_enable": "false", "serial": "test", "serial_visible": "true", "days": "1", "writeDate_visible": "true", "endDate_enable": "false", "memo_description": "意見", "agree_description": "同意" };
const form = reactive({
  name: jsonObject.name,
  serial: jsonObject.serial,
  writeDate: jsonObject.writeDate,
  department: jsonObject.department,
  role: jsonObject.role,
  agency: jsonObject.agency,
  startDate: jsonObject.startDate,
  endDate: jsonObject.endDate,
  days: jsonObject.days,
  hours: jsonObject.hours,
  reason: jsonObject.reason,
  agree: jsonObject.agree,
  reject: jsonObject.reject,
  memo: jsonObject.memo,
  cancel: jsonObject.cancel,
})
</script>

<template>
  <main>
    <el-form :model="form" label-width="auto" style="max-width: 600px" name="eForm"
      action='<%=request.getParameter("eform.web.url")%>/custForm.do' method="POST">
      <input type="hidden" name="eform.method" value="suspend" />
      <input type="hidden" name="eform.taskId" value="{{jsonObject.eform_taskId}}"/>
      <el-form-item label="單號" prop="serial" v-if="jsonObject.serial_visible">
        <el-input v-model="form.serial" name="serial" :disabled="jsonObject.serial_enable != 'true'" />
      </el-form-item>
      <el-form-item label="填單日期" prop="writeDate" v-if="jsonObject.writeDate_visible">
        <el-date-picker v-model="form.writeDate" name="writeDate" type="date"
          :disabled="jsonObject.writeDate_enable != 'true'" />
      </el-form-item>
      <el-form-item label="姓名" prop="name" v-if="jsonObject.name_visible">
        <el-input v-model="form.name" name="name" :disabled="jsonObject.name_enable != 'true'" />
      </el-form-item>
      <el-form-item label="部門" prop="department" v-if="jsonObject.department_visible">
        <el-input v-model="form.department" name="department" :disabled="jsonObject.department_enable != 'true'" />
      </el-form-item>
      <el-form-item label="職務" prop="role" v-if="jsonObject.role_visible">
        <el-input v-model="form.role" name="role" :disabled="jsonObject.role_enable != 'true'" />
      </el-form-item>
      <el-form-item label="代理人" prop="agency" v-if="jsonObject.agency_visible">
        <el-input v-model="form.agency" name="agency" :disabled="jsonObject.agency_enable != 'true'" />
      </el-form-item>
      <el-form-item label="開始時間" prop="startDate" v-if="jsonObject.startDate_visible">
        <el-date-picker v-model="form.startDate" name="startDate" type="date"
          :disabled="jsonObject.startDate_enable != 'true'" />
      </el-form-item>
      <el-form-item label="結束時間" prop="endDate" v-if="jsonObject.endDate_visible">
        <el-date-picker v-model="form.endDate" name="endDate" type="date"
          :disabled="jsonObject.endDate_enable != 'true'" />
      </el-form-item>
      <el-form-item label="總時數">
        <el-col :span="11" v-if="jsonObject.days_visible">
          <el-input v-model="form.days" name="days" :disabled="jsonObject.days_enable != 'true'" />
        </el-col> 天
        <el-col :span="2" class="text-center">
          <span class="text-gray-500">&nbsp;</span>
        </el-col>
        <el-col :span="11" v-if="jsonObject.hours_visible">
          <el-input v-model="form.hours" name="hours" :disabled="jsonObject.hours_enable != 'true'" />
        </el-col> 小時
      </el-form-item>
      <el-form-item label="請假原因" prop="reason" v-if="jsonObject.reason_visible">
        <el-input v-model="form.reason" name="reason" type="textarea" :disabled="jsonObject.reason_enable != 'true'" />
      </el-form-item>
      <el-form-item label="同意" prop="agree" v-if="jsonObject.agree_visible">
        <el-input name="agree" v-model="form.agree" :disabled="jsonObject.agree_enable != 'true'"></el-input>
      </el-form-item>
      <el-form-item label="駁回" prop="reject" v-if="jsonObject.reject_visible">
        <el-input name="reject" v-model="form.reject" :disabled="jsonObject.reject_enable != 'true'"></el-input>
      </el-form-item>
      <el-form-item label="意見" prop="memo" v-if="jsonObject.memo_visible">
        <el-input v-model="form.memo" name="memo" type="textarea" :disabled="jsonObject.memo_enable != 'true'" />
      </el-form-item>
    </el-form>
  </main>
</template>

<style scoped>

</style>
