<template>
  <div class="counter">
    <h1>{{ count }}</h1>
    <button v-on:click="dec">
      --
    </button>
    <button @click="inc">
      ++
    </button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    inc() {
      this.count = this.count + 1;
    },
    dec() {
      this.count = this.count - 1;
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
