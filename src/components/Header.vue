<template>
  <header>
    <nav>
      <router-link class="home" to="/">Home</router-link>
      <router-link to="/add" v-if="isOnline">New Post</router-link>
    </nav>
    <span v-if="!isOnline">Connection lost :(</span>
  </header>
</template>
<style scoped>
header {
  display: flex;
  flex-direction: column;
}
span {
  text-align: center;
  background: #a4ceff;
  padding: 3px;
  border-radius: 2px;
  margin-top: 2px;
}
nav {
  display: flex;
  justify-content: space-between;
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
  border: 2px solid #a4ceff;
  border-radius: 5px;
  padding: 5px;
  margin: 5px;
}
</style>
