<template>
  <router-view/>
</template>

<script>
export default {
  name: 'App',
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
  color: #ffffff;
  &.router-link-exact-active, 
  &.router-link-active {
    color: #ffffff;
  }
}

</style>
