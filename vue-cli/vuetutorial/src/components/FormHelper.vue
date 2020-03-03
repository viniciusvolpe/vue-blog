<template>
  <div>
    <h1>Fill out our form</h1>
    <div id="form-header">
      <slot name="form-header" />
    </div>
    <div id="form-fields">
      <slot name="form-fields" />
    </div>
    <div id="form-controls">
      <slot name="form-controls" />
    </div>
    <div id="useful-links">
      <ul>
        <li>
          <a href="http://google.com">Link</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
h1 {
  text-align: center;
}
form {
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
}
#useful-links ul {
  padding: 0;
}
#useful-links li {
  display: inline-block;
  margin-right: 10px;
}
form > div {
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}
#form-header {
  background: #ddd;
  border: 1px solid #bbb;
}
</style>