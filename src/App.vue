<template>
  <Nav/>
  <router-view/>
</template>

<script>
import Nav from '@/components/Nav';
export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>


<style lang="scss">
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
}
body {
  background: #1A0021;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  overflow-x: hidden;
}
a {
  font-weight: bold;
  color: #2c3e50;
  &.router-link-exact-active {
    color: #42b983;
  }
}

</style>
