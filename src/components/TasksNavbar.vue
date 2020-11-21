<template>
    <nav class="navbar navbar-expand-md bg-danger py-1 my-0">
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link to="/tasks">View All Tasks</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/tasks/create">Create New Task</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'TasksNavbar'
}
</script>

<style lang="scss" scoped>
.nav-item{
  margin-right: 20px;
  &:last-of-type{
    margin-right: 0;
  }
  a{
    color: white;
    text-decoration: none;
    transition: all 300ms ease;
    font-size: 13px;
    &:hover{
      color: lightcoral;
    }
  }
}
</style>