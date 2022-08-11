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
            <li>
              <div class="counter-item">
                <i class="ion-ios-chatboxes-outline"></i>
                <h4>
                  <count-to ref="countTo1" class="count" :end-val="99" :duration="1000" :autoplay="false">0</count-to>
                </h4>
                <span>Cups Of Coffee</span>
              </div>
            </li>
            <li>
              <div class="counter-item">
                <i class="ion-ios-glasses-outline"></i>
                <h4>
                  <count-to ref="countTo2" class="count" :end-val="45" :duration="1000" :autoplay="false">0</count-to>
                </h4>
                <span>Article Written</span>
              </div>
            </li>
            <li>
              <div class="counter-item">
                <i class="ion-ios-compose-outline"></i>
                <h4>
                  <count-to ref="countTo3" class="count" :end-val="125" :duration="1000" :autoplay="false">0</count-to>
                </h4>
                <span>Projects Completed</span>
              </div>
            </li>
            <li>
              <div class="counter-item">
                <i class="ion-ios-timer-outline"></i>
                <h4>
                  <count-to ref="countTo4" class="count" :end-val="200" :duration="1000" :autoplay="false">0</count-to>
                </h4>
                <span>Combined Projects</span>
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
    started: false
  }),

  mounted () {
    // document.querySelector('.count')
    const self = this
    document.addEventListener('scroll', function (e) {
      // console.log(window.scrollY)
      if (self.$refs.countTo1.$el.getBoundingClientRect().top - window.innerHeight < -300 && !this.started) {
        self.$refs.countTo1.start()
        self.$refs.countTo2.start()
        self.$refs.countTo3.start()
        self.$refs.countTo4.start()
        this.started = true
      }
    })
  }
}
</script>
