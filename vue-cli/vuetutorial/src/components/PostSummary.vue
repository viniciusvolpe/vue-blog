<template>
  <div class="post">
    <img :src="post.image" />
    <div>
      <post-title>{{ post.title }}</post-title>
      <subtitle>{{ post.author }}</subtitle>
    </div>
  </div>
</template>
<script>
import Title from "./Title.vue";
import Subtitle from "./Subtitle.vue";
export default {
  components: {
    subtitle: Subtitle,
    "post-title": Title
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>
<style scoped>
.post {
  display: flex;
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 20px;
}
.post img {
  max-width: 60%;
  margin-right: 20px;
}
</style>
