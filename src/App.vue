<template>
  <div id="app">
    <b-jumbotron header="Movie Catalogue" lead="A CPSC 304 Project"></b-jumbotron>
    <Body></Body>
  </div>
</template>

<script>
import Body from './components/Body.vue'

export default {
  name: 'App',
  components: {
    Body
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 60%;
  margin: 0 auto;
}
</style>
