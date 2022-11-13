<template>
  <div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="fullname" label="Name"/>
      <el-table-column prop="phone_number" label="phone"/>
      <el-table-column prop="age" label="Age"/>
    </el-table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "Patients",
  data() {
    return {
      tableData: [
        {
          fullname: '',
        },
        {
          phone_number: ''
        },
        {
          age: ''
        }
      ],
    }
  },
  created() {
    this.getPatients();
  },
  methods: {
    getPatients() {
      axios.get(`/api/v1/patient/subordinate/list`)
          .then(response => {
            this.tableData = response.data.data;
            console.log('ths', this.items)
          })
    }
  }
}
</script>

<style scoped>

</style>
