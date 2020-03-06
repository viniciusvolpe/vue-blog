import Vue from "vue";
import VueResource from "vue-resource";
import VueOnlinePlugin from "vue-navigator-online";

Vue.use(VueOnlinePlugin);
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

if ("serviceWorker" in navigator && process.env.NODE_ENV === "production") {
  navigator.serviceWorker
    .register("/sw.js")
    .then(res => console.log("sw registered", res))
    .catch(err => console.error(err));
}
