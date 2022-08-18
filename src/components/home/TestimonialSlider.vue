<template>
  <div class="testimonial-carousel text-center">
    <vue-slick-carousel
      v-if="slides.length"
      class="testimonial-slider owl-carousel"
      :arrows="false"
      :dots="false"
      autoplay
    >
      <div v-for="(slide, i) in slides" :key="i">
        <i class="ion-quote"></i>
        <p>{{ slide.text }}</p>
        <div class="user">
          <img :src="slide.image" alt="Pepole">
          <p><span>{{ slide.author.name }}</span> {{ slide.author.job }}</p>
        </div>
      </div>
    </vue-slick-carousel>
  </div>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'

export default {
  components: {
    VueSlickCarousel
  },

  data: () => ({
    api_slides: []
  }),

  computed: {
    slides () {
      return this.api_slides.map(slide => ({
        text: `"${slide.message}"`,
        image: slide.avatar,
        author: {
          name: slide.name,
          job: slide.designation
        }
      }))
    }
  },

  async created () {
    const res = await this.axios.get('https://testimonialapi.toolcarton.com/api')
    this.api_slides = res.data
  }
}
</script>
