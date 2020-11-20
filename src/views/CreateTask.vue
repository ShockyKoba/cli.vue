<template>
	<main class="page tasks create">
		<TasksNavbar />
		<div class="container-fluid">
			<Header :title="`${$route.name} Page`" />
			<TaskForm />
		</div>
	</main>
</template>

<script>
import Header from '../components/Header.vue';
import TasksNavbar from '../components/TasksNavbar.vue';
import TaskForm from '../components/forms/TaskForm.vue';

export default {
    name: 'Create Task',
    components: {
        Header, TasksNavbar, TaskForm
    }
}
</script>