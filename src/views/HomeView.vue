<template>
  <div class="home">
    <home-slider />
    <about-section />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSlider from '@/components/HomeSlider.vue'
import AboutSection from '@/components/home/AboutSection.vue'

export default {
  name: 'HomeView',
  components: {
    HomeSlider,
    AboutSection
  }
}
</script>
