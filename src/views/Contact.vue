<template>
  <main class="page contact">
    <div class="container">
      
      <Header :title="`${$route.name} Page`" />
      <ContactForm />

    </div>
  </main>
</template>

<script>
import ContactForm from '../components/forms/ContactForm.vue' 
import Header from '../components/Header.vue'

export default {
  components: {
    ContactForm, Header
  }
}
</script>  