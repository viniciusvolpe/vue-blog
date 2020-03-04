<template>
  <page>
    <form>
      <form-group title="Content">
        <label for="title">Title</label>
        <input type="text" name="title" />
        <label for="body">Body</label>
        <textarea name="body" rows="30"></textarea>
        <label for="image">Image URL</label>
        <input type="text" name="image" v-model="post.image" />
      </form-group>
      <form-group title="Category">
        <div class="categories">
          <label
            for="categories"
            v-for="(category, index) in categories"
            :key="index"
          >
            <input
              type="checkbox"
              :value="category"
              v-model="post.categories"
            />
            {{ category }}
          </label>
        </div>
      </form-group>
      <form-group title="Author">
        <select name="author" v-model="post.author">
          <option v-for="(author, index) in authors" :key="index">{{
            author
          }}</option>
        </select>
      </form-group>
      <button @click.prevent="save">Submit</button>
    </form>
  </page>
</template>
<script>
import { Page, FormGroup } from "../components";
import { categories, authors } from "../mixins";
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
        categories: [],
        author: "Vinicius"
      }
    };
  },
  methods: {
    save() {}
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
