<template>
  <div>
    <div class="login">
      <div>
        <el-row :gutter="10" justify="center">
          <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6">
            <el-card class="box-card">
              <div class="text-center mb-5">
                <img src="../../assets/logo.png" alt="Orko" class="logo">
              </div>
              <el-form
                  ref="ruleFormRef"
                  :model="form"
                  status-icon
                  label-position="top"
                  label-width="120px"
                  class="demo-ruleForm"
              >
                <el-form-item label="Phone Number" prop="userid">
                  <el-input v-model="form.userid"/>
                </el-form-item>
                <el-form-item label="Password" prop="pass">
                  <el-input v-model="form.password" type="password" autocomplete="off"/>
                </el-form-item>

                <el-form-item>
                  <el-button @click="submitForm" type="primary"
                  >Submit
                  </el-button>
                  <el-button @click="resetForm()">Reset</el-button>
                </el-form-item>
              </el-form>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: 'Login',
  data() {
    return {
      form: {
        userid: '',
        password: '',
        user_type: 'agent',
        password_required: 1
      },
    };
  },
  methods: {
    ...mapActions('auth', ['login']),
    submitForm() {

      if (this.form) {
        console.log('called')
        this.login(this.form);
      }
    },

  },
};
</script>

<style scoped>
.login {
  position: absolute;
  top: 23%;
  width: 100%;
}

.logo {
  height: 100px;
}
</style>
