import Vue from "vue";
import Vuex from "vuex";
import { postsService } from "../services";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    posts: []
  },
  mutations: {
    set(state, posts) {
      const postsList = Object.entries(posts).map(([id, post]) => ({
        id,
        ...post
      }));
      state.posts = postsList;
    },
    push(state, post) {
      state.posts.push(post);
    }
  },
  getters: {
    getById(state) {
      return id => state.posts.find(post => post.id === id);
    },
    filter(state) {
      return ({ search, category }) => {
        if (category)
          return state.posts.filter(({ categories }) =>
            (categories || []).includes(category)
          );
        return state.posts.filter(({ title, author }) =>
          `${title} ${author}`.toLowerCase().includes(search.toLowerCase())
        );
      };
    }
  },
  actions: {
    load({ commit }) {
      postsService.load().then(posts => commit("set", posts));
    }
  }
});
