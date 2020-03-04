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

<style scoped></style>
