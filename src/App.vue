<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<style>
@import '~@/plugins/bootstrap/bootstrap.min.css';
@import '~@/plugins/Ionicons/css/ionicons.min.css';
@import '~@/plugins/animate-css/animate.css';
@import '~@/plugins/magnific-popup/magnific-popup.css';
@import '~@/plugins/slick/slick.css';
@import '~@/css/style.css';
</style>
