<template>
<div class="page-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-md-6" v-for="post in posts" :key="post.id">
        <div class="post">
          <div class="post-thumb">
            <a href="blog-single.html">
              <img class="img-fluid" :src="post.image" alt="">
            </a>
          </div>
          <h3 class="post-title"><a href="blog-single.html">{{ post.title }}</a></h3>
          <div class="post-meta">
            <ul>
              <li>
                <i class="ion-calendar"></i> {{ post.publishDate }}
              </li>
              <li>
                <i class="ion-android-people"></i> POSTED BY {{ post.owner.firstname }}
              </li>
              <li>
                <a href="blog-grid.html"><i class="ion-pricetags"></i> LIFESTYLE</a>,<a href="blog-left-sidebar.html"> TRAVEL</a>, <a href="blog-right-sidebar.html">FASHION</a>
              </li>

            </ul>
          </div>
          <div class="post-content">
            <p>{{ post.text }}</p>
            <a href="blog-single.html" class="btn btn-main">Read More</a>
          </div>
        </div>
      </div>
    </div>

    <nav aria-label="Page navigation example">
      <ul class="pagination post-pagination justify-content-center">
        <li class="page-item"><button :disabled="!page" @click="prev" class="page-link">Prev</button></li>
        <li class="page-item"><button :disabled="!haveMore" @click="next" class="page-link">Next</button></li>
      </ul>
    </nav>
  </div>
</div>
</template>

<script>
export default {
  data: () => ({
    posts: [],
    page: 0,
    total: 0,
    per_page: 10
  }),

  computed: {
    haveMore () {
      return this.page < this.last_page
    },

    last_page () {
      return Math.ceil((this.total / this.per_page) - 1)
    }
  },

  async created () {
    await this.loadPosts()
  },

  methods: {
    next () {
      this.page++
    },

    prev () {
      if (!this.page) { return }
      this.page--
    },

    async loadPosts () {
      const res = await this.axios.get(`https://dummyapi.io/data/v1/post?limit=10&page=${this.page}`, {
        headers: {
          'app-id': '62fe493e314b562163a5ae99'
        }
      })
      this.posts = res.data.data
      this.total = res.data.total
    }
  },

  watch: {
    async page () {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      await this.loadPosts()
    }
  }
}
</script>
