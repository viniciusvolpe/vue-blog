<template>
  <main>
    <page-title>Vue Blog</page-title>
    <subtitle>by Vinicius</subtitle>
    <post-filter :filter="filter" />
    <posts :posts="posts" />
  </main>
</template>
<script>
import { Filter, Posts, Subtitle, Title } from "../components";
export default {
  components: {
    "post-filter": Filter,
    "page-title": Title,
    subtitle: Subtitle,
    posts: Posts
  },
  data() {
    return {
      filter: {
        search: "",
        category: ""
      },
      postList: [
        {
          id: "asderhfgfqer",
          title: "How to Vue",
          body: "How to create a vue application",
          categories: ["Basics"],
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1920px-Vue.js_Logo_2.svg.png",
          author: "Vinicius"
        }
      ]
    };
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
<style scoped>
main {
  padding: 0 10px;
}
</style>
