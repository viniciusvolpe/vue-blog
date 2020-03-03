 <template>
  <div>
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "First vue file"
    };
  },
  methods: {
    greeting() {
      return "Heey";
    }
  }
};
</script>

<style>
</style>
