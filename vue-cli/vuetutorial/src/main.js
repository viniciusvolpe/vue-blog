import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import router from "./router";
import App from "./App.vue";

Vue.use(VueResource);
Vue.use(VueRouter);

new Vue({
  el: "#app",
  render: h => h(App),
  router
});
