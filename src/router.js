import Vue from "vue";
import VueRouter from "vue-router";
import { Home, AddPost, SinglePost } from "./pages";

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/add", component: AddPost },
    { path: "/post/:id", component: SinglePost }
  ]
});
