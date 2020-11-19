<template>
  
      <button @click="this.$emit('method')" v-if="buttonAction == 'delete'">{{button.text}}</button>
      <button @click="this.$emit('method')" v-else-if="buttonAction == 'update'">{{button.text}}</button>
      <button @click="this.$emit('method')" v-else-if="buttonAction == 'create'">{{button.text}}</button>
      <button v-else disabled>No Action</button>

</template>

<script>
export default {
  name: 'CRUDTitle',

  data() {
    return {
      button: {
        text: this.buttonAction + ' Title'
      }
    }
  },
  props: {
    buttonAction: {
      type: String,
      default: 'update'
    }
  }

}
</script>

<style scoped>
button{
  text-transform: capitalize;
  margin: 10px 10px;
}
</style>