<template>
  <div class="wrapper">

    <Notifications />
    <Navbar />
    <router-view />
    <Footer />

  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';
import Notifications from '@/components/Notifications.vue';

export default {
  components: {
    Navbar, Notifications, Footer
  },
  methods: {
    ...mapActions(['loadLocalStorageDB'])
  },
  created(){
    this.loadLocalStorageDB();
  }
}
</script>

<style lang="scss">
html, body, #app, .wrapper{
  min-height: 100vh;
}
.wrapper{
  display: flex;
  flex-direction: column;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  overflow: hidden;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

h1{
  font-weight: bold;
}

input[type="submit"]:not([disabled]){
  cursor: pointer;
  transition: all 300ms ease;
  &:hover{
    color: #FFF;
    background: #495057;
    border-color: #495057;
  }
}

input{
  outline: 0 !important;
}
</style>
