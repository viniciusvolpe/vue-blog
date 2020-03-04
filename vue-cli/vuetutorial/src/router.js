import VueRouter from "vue-router";
import { Home, AddPost } from "./pages";

export default new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/add", component: AddPost }
  ]
});
