<template>
  <div>
    <el-menu
        default-active="2"
        class="el-menu-vertical-demo sidebar-menu"
        :collapse="isCollapse"

        @open="handleOpen"
        @close="handleClose"
    >
      <div class="text-center">
        <img src="../../../assets/logo.png" alt="Orko" class="sidebar-logo">
      </div>
      <el-sub-menu index="1">
        <template #title>
          <el-icon>
            <location/>
          </el-icon>
          <span>Patients</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Group One</span></template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
        <el-sub-menu index="1-4">
          <template #title><span>item four</span></template>
          <el-menu-item index="1-4-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>

      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>
          <router-link class="el-link" to="/patients">Patients</router-link>
        </template>
      </el-menu-item>

      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>Notification</template>
      </el-menu-item>

      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>Doctor List</template>
      </el-menu-item>

      <el-menu-item index="4">
        <el-icon>
          <setting/>
        </el-icon>
        <template #title>Doctor Search</template>
      </el-menu-item>

    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  data() {
    return {
      isCollapse: false,
    };
  },
  methods: {
    handleOpen() {

    },
    handleClose() {

    },
  },
};
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}

.sidebar-menu {
  height: 100vh;
}

.sidebar-logo {
  height: 50px;
  text-align: center;
}
.sidebar-padding {

}
</style>
