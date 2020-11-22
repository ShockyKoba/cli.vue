<template>
  <nav class="navbar navbar-expand-md bg-dark py-4 my-0">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <template v-if="authUser">
          <li class="nav-item active">
            <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user">Account</router-link>
          </li>
          <!-- <li class="nav-item">
            <router-link to="/contact">Contact</router-link>
          </li> -->
          <li class="nav-item">
            <router-link to="/tasks">Tasks</router-link>
          </li>
          <li class="nav-item ml-auto">
            <button class="btn btn-danger px-3 py-1" @click="signoff()">Sign Off</button>
          </li>
        </template>
        <template v-else>
          <li class="nav-item active">
            <router-link to="/login">Log In</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/register">Register</router-link>
          </li>
        </template>

      </ul>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HelloWorld',
  computed: {
    ...mapGetters(['authUser'])
  },
  methods: {
    ...mapActions(['signoff'])
  }
}
</script>

<style scoped lang="scss">
.navbar{
  .navbar-nav{
    width: 100%;
    .nav-item{
      margin-right: 20px;
      display: flex;
      align-items: center;
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
  }
}
</style>
