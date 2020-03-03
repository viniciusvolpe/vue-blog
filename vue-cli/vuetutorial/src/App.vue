<template>
  <div>
    <!-- <app-header v-bind:title="title" @changeTitle="updateTitle($event)" />
    <app-ninjas v-bind:ninjas="ninjas" />
    <app-footer v-bind:title="title" />-->
    <!-- <form-helper>
      <div slot="form-header">
        <h3>Form header</h3>
        <p>Form info</p>
      </div>
      <div slot="form-fields">
        <input type="text" name="name" placeholder="Name" />
        <input type="text" name="password" placeholder="Password" />
      </div>
      <div slot="form-controls">
        <button type="submit" @click="handleSubmit">Submit</button>
      </div>
    </form-helper>-->
    <keep-alive>
      <component :is="component" />
    </keep-alive>
    <button @click="showForm('one')">Form one</button>
    <button @click="showForm('two')">Form two</button>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Ninjas from "./components/Ninjas.vue";
import FormHelper from "./components/FormHelper.vue";
import FormOne from "./components/FormOne.vue";
import FormTwo from "./components/FormTwo.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas,
    "form-helper": FormHelper,
    "form-one": FormOne,
    "form-two": FormTwo
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ],
      title: "Vue ninjas",
      component: "form-one"
    };
  },
  methods: {
    updateTitle(newTitle) {
      this.title = newTitle;
    },
    handleSubmit() {
      console.log("submitted");
    },
    showForm(form) {
      this.component = `form-${form}`;
    }
  }
};
</script>

<style scoped></style>
