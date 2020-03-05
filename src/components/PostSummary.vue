<template>
  <div class="post">
    <div
      class="image"
      :style="{ background: `url('${post.image}') center no-repeat` }"
    ></div>
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
  margin-bottom: 20px;
}
@media screen and (max-width: 768px) {
  .post {
    flex-direction: column;
  }
}
.image {
  min-width: 400px;
  height: 200px;
  margin-right: 20px;
  background-size: cover !important;
}
</style>
