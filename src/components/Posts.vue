<template>
  <section>
    <div v-for="(post, index) in posts" :key="index">
      <router-link :to="`/post/${post.id}`">
        <post-summary :post="post" />
      </router-link>
    </div>
  </section>
</template>
<script>
import PostSummary from "./PostSummary.vue";
export default {
  components: {
    "post-summary": PostSummary
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
a {
  text-decoration: none;
  color: unset;
}
</style>
