<template>
  <nav class="navbar navbar-expand-md bg-dark py-4 my-0">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        
        <li class="nav-item active">
          <router-link to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/contact">Contact</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/tasks">Tasks</router-link>
        </li>

      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'HelloWorld',
}
</script>

<style scoped lang="scss">
.nav-item{
  margin-right: 20px;
  &:last-of-type{
    margin-right: 0;
  }
  a{
    color: #dc3545;
    text-decoration: none;
    transition: all 300ms ease;
    &:hover{
      color: white;
    }
  }
}
</style>
