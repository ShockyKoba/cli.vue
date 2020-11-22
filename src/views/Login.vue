<template>
  <main class="page register">
      <div class="container">
        <Header title="Sign Up" />
        <LoginForm />
      </div>
  </main>
</template>

<script>

import Header from '../components/Header.vue';
import LoginForm from '../components/forms/LoginForm.vue';

export default {
    components: {
      LoginForm, Header
    }
}
</script>

<style lang="scss" scoped>

</style>