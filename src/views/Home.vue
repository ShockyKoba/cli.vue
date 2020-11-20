<template>
  <main class="page home">
    <div class="container">

      <img src="../assets/logo.png" alt="Vue Logo" class="mx-auto mt-5">
      <Header :title="`${$route.name} Page`" />
      
    </div>
  </main>
</template>

<script>
import Header from '../components/Header.vue'

export default {
  name: 'Home',
  components: {
    Header
  }
}
</script>
