<template>
  <page>
    <page-title>Vue Blog</page-title>
    <subtitle>by Vinicius</subtitle>
    <post-filter :filter="filter" />
    <posts :posts="posts" />
  </page>
</template>
<script>
import { mapActions, mapState } from "vuex";
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
      }
    };
  },
  methods: {
    ...mapActions({ filterPosts: "filter" })
  },
  computed: mapState({
    posts(state) {
      return state.filteredPosts;
    }
  }),
  watch: {
    filter: {
      handler(value) {
        this.filterPosts(value);
      },
      deep: true
    }
  }
};
</script>
