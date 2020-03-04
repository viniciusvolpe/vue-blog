<template>
  <main>
    <app-header />
    <router-view />
  </main>
</template>

<script>
import { Header } from "./components";
export default {
  components: {
    "app-header": Header
  }
};
</script>
<style>
html,
body {
  margin: 0;
}
main {
  max-width: 800px;
  margin: 0 auto;
}
</style>
