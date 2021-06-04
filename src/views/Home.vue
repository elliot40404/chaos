<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Code />
  </div>
</template>

<script>
// @ is an alias to /src
import Code from '@/components/Code.vue'

export default {
  name: 'Home',
  components: {
    Code
  }
}
</script>
