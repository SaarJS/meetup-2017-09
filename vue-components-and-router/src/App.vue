<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Single File Component & Router Demo</h1>
    <p>
      <!-- nutze <router-link> zur Navigation -->
      <!-- gib den Link mit der `to`-Prop an -->
      <!-- <router-link> wird standardmäßig als <a> gerendert-->
      <router-link to="/">Hello</router-link>
      <router-link to="/counter">Counter</router-link>
      <router-link to="/greet">Greet</router-link>
    </p>

    <transition name="slide-fade" mode="out-in"/>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
</style>
