<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>Count: {{ count }}</h1>
    <Btn action="add" quantity="5" /> <Btn action="remove" :quantity="10" /> <Btn />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Btn from '@/components/Btn.vue'
import {mapState, mapActions} from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld, Btn
  },
  computed: {
    ...mapState(['count'])
  },
}
</script>
