
<!-- ++++++++++++++++++++| TEMPLATE |++++++++++++++++++++ -->
<template>

  <img alt="Vue logo" src="./assets/logo.png">
  <Header title_content="Extracheese sss" title_options="true" />



  <Header title_content="Extracheese sss" title_options="false" />

</template>
<!-- ++++++++++++++++++| END TEMPLATE |++++++++++++++++++ -->





<!-- ++++++++++++++++++++| SCRIPTS |++++++++++++++++++++ -->
<script>

// ~~~~~~| COMPONENTS |~~~~~~
import Header from './components/Header'

// ~~~~~~| CONFIG |~~~~~~
export default {
  name: 'App',
  components: {
    Header
  }
}

</script>
<!-- ++++++++++++++++++| END SCRIPTS |++++++++++++++++++ -->





<!-- ++++++++++++++++++++| STYLES |++++++++++++++++++++ -->
<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
<!-- ++++++++++++++++++| END STYLES |++++++++++++++++++ -->