<template>
  <div class="home">
    <home-slider />
    <about-section />
    <testimonial-section />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSlider from '@/components/HomeSlider.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import TestimonialSection from '@/components/home/TestimonialSection.vue'

export default {
  name: 'HomeView',
  components: {
    HomeSlider,
    AboutSection,
    TestimonialSection
  }
}
</script>
