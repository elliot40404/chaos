<template>
  <div>
    <Nav/>
    <Code />
  </div>
</template>

<script>
// @ is an alias to /src
import Code from '@/components/Code.vue'
import Nav from '@/components/Nav.vue'

export default {
  name: 'Home',
  components: {
    Nav,
    Code
  }
}
</script>
