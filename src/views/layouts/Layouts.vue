<template>
  <div>
    <div class="d-flex">
      <div class="sidebar-padding">
        <Sidebar/>
      </div>
      <div class="w-100">
        <div class="header">
          <Header/>
        </div>
        <div class="main-content">
          <router-view/>
        </div>
        <!--        <div>-->
        <!--          <Footer />-->
        <!--        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar/Sidebar';
import Header from './header/Header';
import Footer from './footer/Footer';

export default {
  name: 'Layouts',
  components: {
    Sidebar,
    Header,
    Footer,
  },
};
</script>

<style scoped>
.main-content {
  padding: 30px 30px;
}
</style>
