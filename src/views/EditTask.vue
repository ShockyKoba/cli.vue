<template>
	<main class="page tasks edit">
		<TasksNavbar />
		<div class="container-fluid">
			<TaskForm :taskID="$route.params.id" />
		</div>
	</main>
</template>

<script>
import Header from '../components/Header.vue';
import TasksNavbar from '../components/TasksNavbar.vue';
import TaskForm from '../components/forms/TaskForm.vue';

export default {
    components: {
        Header, TasksNavbar, TaskForm
    }
}
</script>