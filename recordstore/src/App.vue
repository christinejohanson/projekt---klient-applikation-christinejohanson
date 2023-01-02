<template>
  <main>
    <RouterView />
  </main>
</template>

<script>
import { RouterView } from 'vue-router'

export default {
  components: {
    RouterView
  }
}
</script>



<style scoped>
  main {
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
</style>
