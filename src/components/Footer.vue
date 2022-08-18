<template>
  <footer class="footer">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="footer-manu">
          <ul>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/contact">Contact us</router-link></li>
            <li><router-link to="/service">How it works</router-link></li>
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="pricing.html">Pricing</a></li>
          </ul>
        </div>
        <p class="copyright mb-0">Copyright {{ year }} &copy; Designed & Developed by <a
            href="http://www.themefisher.com">Themefisher</a>. All rights reserved.
          <br> Get More <a href="https://themefisher.com/free-bootstrap-templates/">Free Bootstrap
            Templates</a>
        </p>
      </div>
    </div>
  </div>
</footer>
</template>

<script>
export default {
  name: 'AppFooter',

  computed: {
    year () {
      return (new Date()).getFullYear()
    }
  }
}
</script>
