<template>
  <page>
    <page-title>Vue Blog</page-title>
    <subtitle>by Vinicius</subtitle>
    <post-filter :filter="filter" />
    <posts :posts="posts" />
  </page>
</template>
<script>
import { Filter, Posts, Subtitle, Title, Page } from "../components";
import { api } from "../constants";
export default {
  components: {
    "post-filter": Filter,
    "page-title": Title,
    subtitle: Subtitle,
    posts: Posts,
    page: Page
  },
  data() {
    return {
      filter: {
        search: "",
        category: ""
      },
      postList: []
    };
  },
  created() {
    this.$http.get(`${api.database}/posts.json`).then(
      ({ body }) =>
        (this.postList = body
          ? Object.entries(body).map(([id, post]) => ({
              id,
              ...post
            }))
          : [])
    );
  },
  computed: {
    posts() {
      const { search, category } = this.filter;
      if (category)
        return this.postList.filter(({ categories }) =>
          categories.includes(category)
        );
      return this.postList.filter(({ title, author }) =>
        `${title} ${author}`.toLowerCase().includes(search.toLowerCase())
      );
    }
  }
};
</script>
