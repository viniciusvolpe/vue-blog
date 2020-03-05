<template>
  <div v-if="post">
    <div
      class="image"
      :style="{ background: `url('${post.image}') center no-repeat` }"
    />
    <page class="post">
      <post-title>{{ post.title }}</post-title>
      <subtitle>by {{ post.author }}</subtitle>
      <article>{{ post.body }}</article>
      <p v-if="post.categories">Categories: {{ categories }}</p>
    </page>
  </div>
</template>
<script>
import { Page, Title, Subtitle } from "../components";
import { api } from "../constants";
export default {
  components: {
    page: Page,
    "post-title": Title,
    subtitle: Subtitle
  },
  computed: {
    categories() {
      const { categories = [] } = this.post;
      return categories.join(", ").toLowerCase();
    },
    post() {
      return this.$store.getters.getById(this.$route.params.id);
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
