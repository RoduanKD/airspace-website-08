<template>
<!-- Content Start -->
<section class="testimonial">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="section-title text-center">
          <h2>Fun Facts About Us</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <br> there live the
            blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
        </div>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-md-6">
        <div class="block">
          <ul class="counter-box clearfix">
            <li v-for="(stat) in stats" :key="stat.title">
              <div class="counter-item">
                <i class="ion-ios-chatboxes-outline"></i>
                <h4>
                  <count-to ref="countTo" class="count" :end-val="stat.number" :duration="1000" :autoplay="false">0</count-to>
                </h4>
                <span>{{ stat.title }}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="col-md-5 col-md-offset-1">
        <testimonial-slider></testimonial-slider>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import TestimonialSlider from './TestimonialSlider.vue'
import CountTo from 'vue-count-to'

export default {
  components: {
    TestimonialSlider,
    CountTo
  },

  data: () => ({
    stats: [
      {
        title: 'Cup of Coffee',
        number: 99,
        started: false
      },
      {
        title: 'Article',
        number: 45,
        started: false
      },
      {
        title: 'Projects',
        number: 125,
        started: false
      },
      {
        title: 'Combined',
        number: 200,
        started: false
      }
    ]
  }),

  mounted () {
    document.addEventListener('scroll', this.startCounter)
  },

  beforeDestroy () {
    document.removeEventListener('scroll', this.startCounter)
  },

  methods: {
    startCounter () {
      const self = this
      self.$refs.countTo.forEach((count, i) => {
        if (count.$el.getBoundingClientRect().top - window.innerHeight < -300 && !self.stats[i].started) {
          count.start()
          self.stats[i].started = true
        }
      })
    }
  }
}
</script>
