import VueRouter from "vue-router";
import { Home } from "./pages";

export default new VueRouter({
  routes: [{ path: "/", component: Home }]
});
