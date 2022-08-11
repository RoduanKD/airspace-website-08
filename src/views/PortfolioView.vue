<template>
  <section class="portfolio-work">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="block">
            <div class="portfolio-menu">
              <div class="btn-group btn-group-toggle justify-content-center" data-toggle="buttons">
                <label class="btn btn-sm btn-primary" :class="selectedGroup === 'all' ? 'active': ''">
                  <input v-model="selectedGroup" type="radio" name="shuffle-filter" value="all" />All
                </label>
                <label class="btn btn-sm btn-primary" :class="selectedGroup === 'design' ? 'active': ''">
                  <input v-model="selectedGroup" type="radio" name="shuffle-filter" value="design" />UI/UX Design
                </label>
                <label class="btn btn-sm btn-primary" :class="selectedGroup === 'video' ? 'active': ''">
                  <input v-model="selectedGroup" type="radio" name="shuffle-filter" value="video" />Video
                </label>
                <label class="btn btn-sm btn-primary" :class="selectedGroup === 'illustration' ? 'active': ''">
                  <input v-model="selectedGroup" type="radio" name="shuffle-filter" value="illustration" />ILLUSTRATION
                </label>
              </div>
            </div>
            <transition-group name="fade" tag="div" class="row shuffle-wrapper">
              <div
                v-for="(item, i) in filteredItems"
                :key="i"
                class="col-lg-4 col-sm-6 portfolio-item shuffle-item"
              >
                <img :src="item.image" alt="">
                <div class="portfolio-hover">
                  <div class="portfolio-content">
                    <a :href="item.image" class="portfolio-popup"><i class="icon ion-search"></i></a>
                    <a class="h3" href="portfolio-single.html">{{ item.title }}</a>
                    <p>{{ item.description }} </p>
                  </div>
                </div>
              </div>
            </transition-group>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        groups: ['design'],
        image: require('@/images/portfolio/work1.jpg'),
        title: 'Rio Furniture',
        description: 'Labore et dolore magna aliqua. Ut enim ad'
      },
      {
        groups: ['illustration', 'design'],
        image: require('@/images/portfolio/work2.jpg'),
        title: 'Rio Furniture',
        description: 'Labore et dolore magna aliqua. Ut enim ad'
      },
      {
        groups: ['illustration'],
        image: require('@/images/portfolio/work3.jpg'),
        title: 'Rio Furniture',
        description: 'Labore et dolore magna aliqua. Ut enim ad'
      },
      {
        groups: ['video', 'illustration'],
        image: require('@/images/portfolio/work4.jpg'),
        title: 'Rio Furniture',
        description: 'Labore et dolore magna aliqua. Ut enim ad'
      },
      {
        groups: ['illustration', 'design'],
        image: require('@/images/portfolio/work5.jpg'),
        title: 'Rio Furniture',
        description: 'Labore et dolore magna aliqua. Ut enim ad'
      },
      {
        groups: ['video', 'design'],
        image: require('@/images/portfolio/work6.jpg'),
        title: 'Rio Furniture',
        description: 'Labore et dolore magna aliqua. Ut enim ad'
      }
    ],
    selectedGroup: 'all'
  }),

  computed: {
    filteredItems () {
      return this.items.filter(item => item.groups.indexOf(this.selectedGroup) !== -1 || this.selectedGroup === 'all')
    }
  }
}
</script>

<style>
.portfolio-item {
  transform: scale(1)
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
