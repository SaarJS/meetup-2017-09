<template>
  <div class="hello">
    <h1>{{ greeting }}</h1>
    <h1>{{ greeting }}</h1>
    <div>
      <input type="text" v-model="name">
    </div>
  </div>
</template>

<script>
export default {
  name: 'greeting',
  data() {
    return {
      counter: 0,
      name: 'Bubu',
    };
  },
  computed: {
    greeting() {
      this.counter = this.counter + 1;
      return `Hello ${this.name}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
