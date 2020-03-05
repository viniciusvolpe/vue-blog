import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

import store from "./store";
import router from "./router";
import App from "./App.vue";

new Vue({
  el: "#app",
  render: h => h(App),
  router,
  store
});
