<template>
  <div id="app" :class="{dark: $store.state.dark}">
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

.dark {
  background-color: black;
  color: white;
}

.dark * {
  background-color: black !important;
  color: white !important;
}
</style>
