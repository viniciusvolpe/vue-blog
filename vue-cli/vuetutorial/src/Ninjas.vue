<template>
  <ul>
    <li v-for="ninja in ninjas" :key="ninja">{{ninja}}</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ninjas: ["Yoshi", "Mario"]
    };
  }
};
</script>
<style>
</style>