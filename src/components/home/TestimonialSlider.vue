<template>
  <div class="testimonial-carousel text-center">
    <vue-slick-carousel
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
    slides: [
      {
        text: '"This Company created an e-commerce site with the tools to make our business a success, with innovative ideas we feel that our site has unique elements that make us stand out from the crowd."',
        image: require('@/images/item-img1.jpg'),
        author: {
          name: 'Rose Ray',
          job: 'CEO-Themefisher'
        }
      },
      {
        text: '"This Company created an e-commerce site with the tools to make our business a success, with innovative ideas we feel that our site has unique elements that make us stand out from the crowd."',
        image: require('@/images/item-img1.jpg'),
        author: {
          name: 'Rose Ray',
          job: 'CEO-Themefisher'
        }
      },
      {
        text: '"This Company created an e-commerce site with the tools to make our business a success, with innovative ideas we feel that our site has unique elements that make us stand out from the crowd."',
        image: require('@/images/item-img1.jpg'),
        author: {
          name: 'Rose Ray',
          job: 'CEO-Themefisher'
        }
      },
      {
        text: '"This Company created an e-commerce site with the tools to make our business a success, with innovative ideas we feel that our site has unique elements that make us stand out from the crowd."',
        image: require('@/images/item-img1.jpg'),
        author: {
          name: 'Rose Ray',
          job: 'CEO-Themefisher'
        }
      }
    ]
  })
}
</script>
