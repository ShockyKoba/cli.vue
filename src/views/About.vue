<template>
  <div class="about">
    <h1>This is an about page, count: {{$store.state.count}}</h1>

    <div class="input">
      <span>
        <input type="text" v-model="text">
      </span>
    </div>

    <h2>{{text}}</h2>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        text: null
      }
    },
  }
</script>

<style scoped>

div.input{
  border: 1px solid gray;
  padding: 5px;
}

</style>
