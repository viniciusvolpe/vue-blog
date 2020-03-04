import VueRouter from "vue-router";
import { Home, AddPost, SinglePost } from "./pages";

export default new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/add", component: AddPost },
    { path: "/post/:id", component: SinglePost }
  ]
});
