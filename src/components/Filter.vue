<template>
  <section class="filter">
    <label for="search">Search field</label>
    <input
      type="text"
      v-model.lazy="filter.search"
      @change="cleanCategoryFilter"
      placeholder="Search for a term and type enter"
      id="search"
    />
    <ul>
      <li
        v-for="(category, index) in categories"
        :key="index"
        @click="setCategory(category)"
        :class="{ active: category === filter.category }"
      >
        {{ category }}
      </li>
    </ul>
  </section>
</template>
<script>
import { categories } from "../mixins";
export default {
  mixins: [categories],
  props: {
    filter: {
      type: Object,
      required: true
    }
  },
  methods: {
    setCategory(category) {
      this.filter.search = "";
      this.filter.category =
        this.filter.category === category ? null : category;
    },
    cleanCategoryFilter() {
      this.filter.category = null;
    }
  }
};
</script>
<style scoped>
.filter {
  display: flex;
  flex-direction: column;
}
label {
  position: absolute;
  left: -100px;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #b3b3b3;
  width: 90%;
  margin: 0 auto;
}
ul {
  display: flex;
  justify-content: space-around;
}
li {
  list-style: none;
  padding: 10px;
  cursor: pointer;
}
.active {
  font-weight: bolder;
  border-bottom: 1px solid black;
}
</style>
