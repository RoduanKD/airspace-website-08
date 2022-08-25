<template>
  <header class="navigation">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg p-0">
            <router-link class="navbar-brand" to="/">
              <img src="@/images/logo.png" alt="Logo">
            </router-link>

            <button class="navbar-toggler" :class="{collapsed: !isOpen}" type="button" @click="isOpen = !isOpen" :aria-expanded="isOpen" aria-label="Toggle navigation">
              <span class="ion-android-menu"></span>
            </button>

            <div class="collapse navbar-collapse ml-auto" :class="{show: isOpen}" id="navbarsExample09">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item @@portfolio"><router-link class="nav-link" to="/portfolio">Portfolio</router-link></li>
                <li class="nav-item @@service"><router-link class="nav-link" to="/service">Service</router-link></li>
                <li class="nav-item @@contact"><router-link class="nav-link" to="/contact">Contact</router-link></li>
                <li class="nav-item @@blog"><router-link class="nav-link" to="/blog">{{ $t('navbar.blog') }}</router-link></li>
                <li class="nav-item">
                  <select v-model="$i18n.locale" class="form-control">
                  <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
                    {{ lang }}
                  </option>
                </select>
                </li>
                <li class="nav-item">
                  <button class="btn btn-small" @click="$store.state.dark = !$store.state.dark">Toggle Dark Mode</button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    isOpen: false,
    langs: ['ar', 'en']
  })
}
</script>
