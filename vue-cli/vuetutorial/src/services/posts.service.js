import Vue from "vue";
import { api } from "../constants";
const postsPath = "/posts";
export default {
  load() {
    return Vue.http
      .get(`${api.database}${postsPath}.json`)
      .then(({ body }) => body);
  }
};
