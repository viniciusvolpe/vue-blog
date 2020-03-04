<template>
  <main>
    <h1>Vue Blog</h1>
    <h2>by Vinicius</h2>
    <section class="filter">
      <input
        type="text"
        v-model.lazy="filter.search"
        @change="cleanCategoryFilter"
        placeholder="Search for a term and type enter"
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
    <section>
      <div v-for="(post, index) in posts" :key="index">
        <router-link :to="`/post/${post.id}`">
          <div class="post">
            <img :src="post.image" />
            <div>
              <h1 v-text="post.title" />
              <h2 v-text="post.author" />
            </div>
          </div>
        </router-link>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      categories: ["Basics", "State management", "Libraries"],
      filter: {
        search: "",
        category: ""
      },
      postList: [
        {
          id: "asderhfgfqer",
          title: "How to Vue",
          body: "How to create a vue application",
          categories: ["Basics"],
          image:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1920px-Vue.js_Logo_2.svg.png",
          author: "Vinicius"
        }
      ]
    };
  },
  methods: {
    setCategory(category) {
      this.filter = { category };
    },
    cleanCategoryFilter() {
      this.filter.category = null;
    }
  },
  computed: {
    posts() {
      const { search, category } = this.filter;
      if (category)
        return this.postList.filter(({ categories }) =>
          categories.includes(category)
        );
      return this.postList.filter(({ title, author }) =>
        `${title} ${author}`.toLowerCase().includes(search.toLowerCase())
      );
    }
  }
};
</script>
<style scoped>
main {
  padding: 0 10px;
}
h2 {
  font-size: 18px;
  color: #b3b3b3;
}
.filter {
  display: flex;
  flex-direction: column;
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
  font-weight: bold;
  text-decoration: underline;
}
a {
  text-decoration: none;
  color: unset;
}
.post {
  display: flex;
  background: #f9f9f9;
  padding: 10px;
  margin-bottom: 20px;
}
.post img {
  max-width: 60%;
  margin-right: 20px;
}
</style>
