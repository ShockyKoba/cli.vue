<template>
  <main class="page tasks view">
    <TasksNavbar></TasksNavbar>
    <div class="container-fluid">
      <Header :title="`${$route.name} Page`" />
      <DisplayTasks />
    </div>
  </main>
</template>

<script>
import {mapState} from 'vuex';
import Header from '../components/Header.vue';
import TasksNavbar from '../components/TasksNavbar.vue';
import DisplayTasks from '../components/DisplayTasks.vue';

export default {
    name: 'Tasks',
    components: {
        Header, TasksNavbar, DisplayTasks
    }
}
</script>