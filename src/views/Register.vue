<template>
  <main class="page register">
      <div class="container">
        <Header title="Sign In" />
        <RegisterForm />
      </div>
  </main>
</template>

<script>

import Header from '../components/Header.vue';
import RegisterForm from '../components/forms/RegisterForm.vue';

export default {
    components: {
      RegisterForm, Header
    }
}
</script>

<style lang="scss" scoped>

</style>