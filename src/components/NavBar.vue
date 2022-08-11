<template>
  <header class="navigation">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <nav class="navbar navbar-expand-lg p-0">
            <router-link class="navbar-brand" to="/">
              <img src="@/images/logo.png" alt="Logo">
            </router-link>

            <button class="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
              <span class="ion-android-menu"></span>
            </button>

            <div class="collapse navbar-collapse ml-auto" id="navbarsExample09">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item @@portfolio"><router-link class="nav-link" to="/portfolio">Portfolio</router-link></li>
                <li class="nav-item @@service"><router-link class="nav-link" to="/service">Service</router-link></li>
                <li class="nav-item @@contact"><router-link class="nav-link" to="/contact">Contact</router-link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>
