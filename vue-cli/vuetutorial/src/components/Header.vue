<template>
  <header>
    <router-link class="home" to="/">Home</router-link>
    <router-link to="/add">New Post</router-link>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
  margin: -8px;
}
a {
  text-decoration: none;
  padding: 10px;
}
.home {
  background: #444;
  color: #eee;
}
a:not(.home) {
  color: #444;
  border: 1px solid #a4ceff;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
}
</style>
