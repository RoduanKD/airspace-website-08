<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
    <app-footer></app-footer>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import AppFooter from '@/components/Footer.vue'

export default {
  components: {
    NavBar, AppFooter
  }
}
</script>

<style>
@import '~@/plugins/bootstrap/bootstrap.min.css';
@import '~@/plugins/Ionicons/css/ionicons.min.css';
@import '~@/plugins/animate-css/animate.css';
@import '~@/plugins/magnific-popup/magnific-popup.css';
@import '~@/plugins/slick/slick.css';
@import '~@/css/style.css';
</style>
