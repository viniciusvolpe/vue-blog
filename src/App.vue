<template>
  <main>
    <app-header />
    <router-view />
  </main>
</template>

<script>
import { mapActions } from "vuex";
import { Header } from "./components";
export default {
  components: {
    "app-header": Header
  },
  methods: {
    ...mapActions(["load"])
  },
  created() {
    this.load();
  }
};
</script>
<style>
html,
body {
  margin: 0;
  font-family: "Roboto", sans-serif;
}
main {
  max-width: 800px;
  margin: 0 auto;
}
</style>
