
<!-- ++++++++++++++++++++| TEMPLATE |++++++++++++++++++++ -->
<template>

  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>

</template>
<!-- ++++++++++++++++++| END TEMPLATE |++++++++++++++++++ -->





<!-- ++++++++++++++++++++| SCRIPTS |++++++++++++++++++++ -->
<script>

// ~~~~~~| CONFIG |~~~~~~
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>
<!-- ++++++++++++++++++| END SCRIPTS |++++++++++++++++++ -->





<!-- ++++++++++++++++++++| STYLES |++++++++++++++++++++ -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
<!-- ++++++++++++++++++| END STYLES |++++++++++++++++++ -->