import Vue from "vue";
import Vuex from "vuex";
import { postsService } from "../services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: [],
    filteredPosts: []
  },
  mutations: {
    set(state, posts) {
      const postsList = Object.entries(posts).map(([id, post]) => ({
        id,
        ...post
      }));
      state.posts = postsList;
      state.filteredPosts = postsList;
    },
    filter(state, filteredPosts) {
      state.filteredPosts = filteredPosts;
    }
  },
  getters: {
    getById(state) {
      return id => state.posts.find(post => post.id === id);
    }
  },
  actions: {
    load({ commit }) {
      postsService.load().then(posts => commit("set", posts));
    },
    filter({ commit, state }, { search, category }) {
      if (category)
        return commit(
          "filter",
          state.posts.filter(({ categories }) => categories.includes(category))
        );
      commit(
        "filter",
        state.posts.filter(({ title, author }) =>
          `${title} ${author}`.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }
});
