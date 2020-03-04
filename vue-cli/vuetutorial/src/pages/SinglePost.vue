<template>
  <page class="post">
    <div
      class="image"
      :style="{ background: `url('${post.image}') center no-repeat` }"
    />
    <post-title>{{ post.title }}</post-title>
    <subtitle>by {{ post.author }}</subtitle>
    <article>{{ post.body }}</article>
    <p>Categories: {{ categories }}</p>
  </page>
</template>
<script>
import { Page, Title, Subtitle } from "../components";
export default {
  components: {
    page: Page,
    "post-title": Title,
    subtitle: Subtitle
  },
  data() {
    return {
      post: {
        id: "asderhfgfqer",
        title: "How to Vue",
        body:
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
        categories: ["Basics"],
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1920px-Vue.js_Logo_2.svg.png",
        author: "Vinicius"
      }
    };
  },
  computed: {
    categories() {
      return this.post.categories.join(", ").toLowerCase();
    }
  }
};
</script>
<style scoped>
.post {
  margin-top: 20px;
}
.image {
  width: 100%;
  height: 100px;
}
article {
  padding: 20px;
  text-align: justify;
}
</style>
