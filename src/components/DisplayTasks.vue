<template>
    <section class="module display-tasks">
        <div class="container-fluid">
            <div class="row">

                <div class="col-12">
                    <h4 class="text-left">All Tasks: </h4>
                </div>

                <div class="col-12">
                    <table class="table table-striped table-bordered table-sm w">

                        <colgroup>
                            <col span="1" style="width: 2%">
                            <col span="1" style="width: 8%">
                            <col span="1" style="width: 8%">
                            <col span="1" style="width: 4%">
                            <col span="1" style="width: 4%">
                            <col span="1" style="width: 7%">
                            <col span="1" style="width: 30%">
                            <col span="1" style="width: 5%">
                        </colgroup>

                        <thead class="bg-dark">
                            <tr>
                                <th scope="col">
                                    ID
                                </th>
                                <th scope="col">
                                    NAME    
                                </th>
                                <th scope="col">
                                    AUTHOR
                                </th>     
                                <th scope="col">
                                    TYPE
                                </th>   
                                <th scope="col">
                                    FOR
                                </th>
                                <th scope="col">
                                    EXTRAS
                                </th>     
                                <th scope="col">
                                    DESCRIPTION
                                </th>   
                                <th scope="col" class="th-action">
                                    ACTION
                                </th>               
                            </tr>
                        </thead>
                        
                        <tbody>
                            <tr v-for="(task, index) in tasks" :key="index + 1">
                                <th scope="row">
                                    {{ task.id }}
                                </th>
                                <td>
                                    {{ task.name }}
                                </td>
                                <td>
                                    {{ task.author }}
                                </td>
                                <td>
                                    {{ task.type }}
                                </td>
                                <td>
                                    {{ task.for }}
                                </td>
                                <td>
                                    <span>Email: {{ task.extras.email }}</span> <br>
                                    <span>SMS: {{ task.extras.sms }}</span> <br>
                                    <span>Phone: {{ task.extras.phone }}</span> <br>
                                </td>
                                <td>
                                    {{ task.description }}
                                </td>
                                <td class="td-action">
                                    <div class="d-flex justify-content-start flex-column">
                                        <button class="btn btn-sm btn-danger task-btn-delete" @click="deleteTask(task.id)">Delete</button>
                                        <router-link :to="`/tasks/edit/${task.id}`" class="btn btn-sm btn-warning task-btn-edit">Edit</router-link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
    name: 'Display Tasks',
    computed: {
        ...mapState(['tasks'])
    },
    methods: {
        ...mapActions(['deleteTask']),
    }
}
</script>

<style lang="scss" scoped>
.page{
  &.tasks{

    .task-btn-edit, .task-btn-delete{
      margin-bottom: 5px;
      min-width: 70px;
    }
  }
}
table{
    // table-layout: fixed;
    thead{
        th{
            font-size: 12px;
            font-weight: normal;
            color: #FFF;
        }
    }
    tbody{
        td, th{
            text-align: left;
            font-size: 12px;
            font-weight: normal;
        }
    }
}
</style>