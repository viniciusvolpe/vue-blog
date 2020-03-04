<template>
  <fieldset>
    <h3>{{ title }}</h3>
    <slot />
  </fieldset>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
<style scoped>
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 95%;
  padding: 8px;
  resize: none;
  border-radius: 5px;
  border: 1px solid #ddd;
}
select {
  margin-top: 20px;
  min-width: 100px;
}
h3 {
  margin: 0;
}
fieldset {
  border: 0;
  margin-top: 20px;
}
</style>
