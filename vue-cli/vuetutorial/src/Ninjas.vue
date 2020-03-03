<template>
  <div>
    <h1>list</h1>
    <ul>
      <li v-for="ninja in ninjas" :key="ninja">{{ninja}}</li>
    </ul>
  </div>
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
<style scoped>
h1 {
  color: green;
}
</style>