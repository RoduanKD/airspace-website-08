<template>
  <section class="page-wrapper">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="post post-single">
            <h2 class="post-title">{{ post.text }}</h2>
            <div class="post-meta">
              <ul>
                <li>
                  <i class="ion-calendar"></i> 20, MAR 2020
                </li>
                <li>
                  <i class="ion-android-people"></i> POSTED BY ADMIN
                </li>
                <li>
                  <a href="blog-grid.html"><i class="ion-pricetags"></i> LIFESTYLE</a>,<a href="blog-left-sidebar.html"> TRAVEL</a>, <a href="blog-right-sidebar.html">FASHION</a>
                </li>

              </ul>
            </div>
            <div class="post-thumb">
              <img class="img-fluid" :src="post.image" alt="">
            </div>
            <div class="post-content post-excerpt">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores
                vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis
                a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere. </p>
              <blockquote class="quote-post">
                <p>
                  Lid est laborum dolo rumes fugats untras. Etharums ser quidem rerum facilis dolores nemis omnis fugats vitaes
                  nemo minima rerums unsers sadips amets.. Sed ut perspiciatis unde omnis iste natus error
                </p>
              </blockquote>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum illo deserunt necessitatibus quibusdam sint,
                eos explicabo tenetur molestiae vero facere, aspernatur sit mollitia perferendis reiciendis. Deleniti magni
                explicabo sed alias fugit amet animi molestias ipsum maiores. Praesentium sint, id laborum quos. Tempora
                inventore est, dolor corporis quis doloremque nostrum, eos velit culpa quasi labore. Provident laborum porro
                nihil iste, magnam officia nemo praesentium autem, libero vel officiis. Omnis pariatur nam voluptatem voluptate
                at officia repellat ea beatae eligendi? Mollitia error saepe, aperiam facere. Optio maiores deleniti veritatis
                eaque commodi atque aperiam, debitis iste alias eligendi ut facilis earum! Impedit, tempore.</p>

              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex error esse a dolore, architecto sapiente, aliquid
                commodi, laudantium eius nemo enim. Enim, fugit voluptatem rem molestiae. Sed totam quis accusantium iste
                nesciunt id exercitationem cumque repudiandae voluptas perspiciatis, consequatur quasi, molestias, culpa odio
                adipisci. Nesciunt optio fugiat iste quam modi, ex vitae odio pariatur! Corrupti explicabo at harum qui
                doloribus, sit dicta nemo, dolor, enim eum molestias fugiat obcaecati autem eligendi? Nisi delectus eaque
                architecto voluptatibus, unde sit minus quae quod eligendi soluta recusandae doloribus, officia, veritatis
                voluptatum eius aliquam quos. Consectetur, nisi? Veritatis totam, unde nostrum exercitationem tempora suscipit,
                molestias, deserunt ipsum laborum aut iste eaque? Vitae delectus dicta maxime non mollitia? Sapiente eos a quia
                eligendi deserunt repudiandae modi molestias tenetur autem pariatur ullam itaque, quas eveniet, illo quam rerum
                ex obcaecati voluptatum nesciunt incidunt culpa provident illum soluta. Voluptas possimus nesciunt inventore
                perspiciatis neque fugiat, magnam natus repellendus praesentium eum voluptatum, alias incidunt, tempora
                reprehenderit recusandae et numquam itaque ratione dolor voluptatibus in commodi ut! Neque deserunt nostrum
                commodi dolor natus quo, non vitae deleniti, vero voluptatem error aspernatur veniam expedita numquam amet quia
                in dolores velit esse molestiae! Iusto architecto accusantium quisquam recusandae quod vero quia.</p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  props: ['id'],

  data: () => ({
    post: {}
  }),

  async created () {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    this.loadPost()
  },

  methods: {
    async loadPost () {
      const res = await this.axios.get(`https://dummyapi.io/data/v1/post/${this.id}`, {
        headers: {
          'app-id': '62fe493e314b562163a5ae99'
        }
      })
      this.post = res.data
    }
  }
}
</script>

<style>

</style>
