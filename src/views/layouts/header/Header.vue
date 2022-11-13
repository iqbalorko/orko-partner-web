<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>

    <div class="flex-grow"/>

    <el-sub-menu index="2">
      <template #title>{{ currentUser ? currentUser.fullname : 'profile' }}</template>
      <el-menu-item index="2-1">My Doctors</el-menu-item>
      <el-menu-item index="2-2">My Appointments</el-menu-item>
      <el-menu-item index="2-3">Medical Records</el-menu-item>
      <el-menu-item index="2-3">My Statement</el-menu-item>
      <el-menu-item index="2-3">Settings</el-menu-item>
      <el-menu-item index="2-3" @click="userLogout()">Logout</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      activeIndex: 1,
      isCollapse: false,
    };
  },
  computed: {
    currentUser: {
      get() {
        return this.$store.state.auth.user ? this.$store.state.auth.user : '';
      },
    },
  },
  methods: {
    ...mapActions('auth', ['logout']),
    handleSelect() {
    },
    userLogout() {
      this.logout().then(res => {
        if (res.data && res.data.status_code == 200) {
          this.$router.push('/login');
        }
      })
    }
  },
};
</script>

<style scoped>
.flex-grow {
  flex-grow: 1;
}
</style>
