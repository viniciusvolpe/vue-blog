<template>
  <page>
    <form>
      <form-group title="Content">
        <label for="title">Title</label>
        <input type="text" id="title" v-model="post.title" />
        <label for="body">Body</label>
        <textarea id="body" rows="30" v-model="post.body"></textarea>
        <label for="image">Image URL</label>
        <input type="text" id="image" v-model="post.image" />
      </form-group>
      <form-group title="Category">
        <div class="categories">
          <label v-for="(category, index) in categories" :key="index" :for="`category-${category}`">
            <input
              type="checkbox"
              v-model="post.categories"
              :value="category"
              :id="`category-${category}`"
            />
            {{ category }}
          </label>
        </div>
      </form-group>
      <form-group title="Author">
        <select id="author" v-model="post.author">
          <option v-for="(author, index) in authors" :key="index">
            {{
            author
            }}
          </option>
        </select>
      </form-group>
      <button @click.prevent="save">Submit</button>
    </form>
  </page>
</template>
<script>
import { Page, FormGroup } from "../components";
import { categories, authors } from "../mixins";
import { api, data } from "../constants";
export default {
  components: {
    page: Page,
    "form-group": FormGroup
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
        image: "",
        categories: [],
        author: "Vinicius"
      }
    };
  },
  methods: {
    save() {
      const { image = data.defaultImage, ...post } = this.post;
      this.$http
        .post(`${api.database}/posts.json`, { ...post, image })
        .then(({ body: { name } }) => this.$router.push(`/post/${name}`));
    }
  },
  mixins: [categories, authors]
};
</script>
<style scoped>
.categories {
  display: flex;
  justify-content: space-around;
}
button {
  display: block;
  margin: 0 auto;
  padding: 10px 5px;
  color: #fff;
  background: rgb(34, 139, 230);
  font-size: 18px;
  width: 100px;
  border: 0;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 8px 2px;
}
</style>
