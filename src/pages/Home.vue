<template>
  <page>
    <page-title>Vue Blog</page-title>
    <subtitle>by Vinicius</subtitle>
    <post-filter :filter="filter" />
    <posts :posts="posts" v-if="posts.length" />
    <empty-state v-else></empty-state>
  </page>
</template>
<script>
import { mapActions, mapState } from "vuex";
import {
  Filter,
  Posts,
  Subtitle,
  Title,
  Page,
  EmptyState
} from "../components";
import { api } from "../constants";
export default {
  components: {
    "post-filter": Filter,
    "page-title": Title,
    "empty-state": EmptyState,
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
  computed: {
    posts() {
      return this.$store.getters.filter(this.filter);
    }
  }
};
</script>
