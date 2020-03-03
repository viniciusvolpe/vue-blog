<template>
  <header>
    <h1 @click="changeTitle">{{title}}</h1>
  </header>
</template>
<script>
import { bus } from "../main";
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  methods: {
    changeTitle() {
      //   this.$emit("changeTitle", "Vue wizards");
      this.title = "Vue wizards";
      bus.$emit("titleChanged", this.title);
    }
  }
};
</script>
<style scoped>
header {
  background: lightgreen;
  padding: 10px;
}
h1 {
  color: #222;
  text-align: center;
}
</style>