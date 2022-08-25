<template>
  <section class="slider">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block">
            <h1 class="animated fadeInUp" v-html="$t('hero.title')"></h1>
            <p class="animated fadeInUp" v-html="$t('hero.subtitle')"></p>
            <a href="https://themefisher.com/free-bootstrap-templates/" class="btn btn-main animated fadeInUp">{{ $t('hero.cta') }}</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
