<template>

    <form @submit.prevent="formSubmit" class="pb-3 mt-2">
        <div class="container">
            <div class="row">

                <div class="col-12">
                    <template v-if="taskID != null">
                        <h1 class="mt-2 mb-5 pt-4">Edit Task: {{task.name}}</h1>
                    </template>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Name*" required v-model="task.name">
                    </div>
                </div>

                <div class="col-12 col-md-12">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Author" v-model="task
.author">
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <select name="task-type" id="task-type" class="form-control" required  v-model="task
.type">
                            <option value="">- Task Type* -</option>
                            <option value="admin">Administrative</option>
                            <option value="bg">In Background</option>
                            <option value="routine">Routine</option>
                        </select>
                    </div>
                </div>

                <div class="col-12 col-md-6 pl-4 mb-3 d-flex justify-content-start flex-wrap">
                    <h5 class="d-block w-100 text-left"><strong>For*: </strong></h5>

                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-check-input" value="client" name="task-for" id="task-for-client" required  v-model="task
.for">
                        <label for="task-for-client" class="form-check-label">Client</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-check-input" value="partner" name="task-for" id="task-for-partner" v-model="task
.for">
                        <label for="task-for-partner" class="form-check-label">Partner</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="radio" class="form-check-input" value="admin" name="task-for" id="task-for-admin" v-model="task
.for">
                        <label for="task-for-admin" class="form-check-label">Administrator</label>
                    </div>
                </div>

                <div class="col-12 col-md-6 pr-4 mb-3 d-flex justify-content-start flex-wrap">
                    <h5 class="d-block w-100 text-left"><strong>Reminders: </strong></h5>

                    <div class="form-check form-check-inline">
                        <input type="checkbox" class="form-check-input" name="task-reminder-sms" id="task-reminder-sms" v-model="task
.extras.sms">
                        <label for="task-reminder-sms" class="form-check-label">SMS</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="checkbox" class="form-check-input" name="task-reminder-email" id="task-reminder-email" v-model="task
.extras.email">
                        <label for="task-reminder-email" class="form-check-label">Email</label>
                    </div>

                    <div class="form-check form-check-inline">
                        <input type="checkbox" class="form-check-input" name="task-reminder-phone" id="task-reminder-phone"  v-model="task
.extras.phone">
                        <label for="task-reminder-phone" class="form-check-label">Phone Call</label>
                    </div>
                </div>


                <div class="col-12">
                    <div class="form-group">
                        <textarea name="task-description" id="task-description" rows="10" class="form-control" placeholder="Description*"  v-model="task
.description" ></textarea>
                    </div>
                </div>

                <div class="col-12">
                    <div class="form-group">
                        <input type="submit" :value="(this.taskID !== null) ? 'Update Task' : 'Create Task' " class="form-control" :disabled="disableSubmit">
                    </div>
                </div>

                <!-- <div class="col-12">
                     <small> {{ JSON.stringify(task) }} </small> 
                </div> -->
                
            </div>
        </div>
    </form>

</template>

<script>
// import mapActions from 'vuex';
import {mapState, mapActions} from 'vuex';
import {alertNotification} from '../../functions.js';

const shortID = require('shortid');

export default {
    data() {
        return {
            task: {
                id: '',
                name: '',
                author: '',
                type: '',
                for: '',
                extras: {},
                description: '',
            }
        }
    },
    created () {
        if( this.taskID !== null ){

            this.getTask(this.taskID);

            if( this.theTask !== undefined ){

                this.getTask(this.taskID);
                this.task = this.theTask;

            }else{
                window.location.href = "/";
            }
        }
    },
    methods: {
        ...mapActions(['manageTask', 'getTask']),
        
        formSubmit: function(){ 
            /* if you are editing a task */
            if(this.taskID !== null){

                if( this.theTask !== undefined ){

                    this.manageTask(this.task);
                    alertNotification('Task Updated!', 'warning');

                }else{

                    alertNotification('Some error has ocurred!', 'danger');

                }
            }else{
                /* if you are creating a task */
                if(this.fieldsRequiredArentEmpty() == true){

                    this.task.id = shortID.generate();
                    this.manageTask(this.task);
                    alertNotification('Task Created Correctly!', 'success');
                    this.formReset();

                }else{

                    alertNotification('Some error has ocurred!', 'danger');

                }
            }
        },

        fieldsRequiredArentEmpty(){
            if( this.task.name.trim() !== '' && 
                this.task.type.trim() !== '' && 
                this.task.for.trim() !== '' &&
                this.task.description.trim() !== '' ){
                    return true;
            }
            return false;
        },

        formReset: function(){
            this.task = {
                id: '',
                name: '',
                author: '',
                type: '',
                for: '',
                extras: {},
                description: '',
            }
        }
    },
    props: {
        taskID: {
            type: String,
            default: null
        }
    },
    computed: {
        ...mapState(['theTask']),
        disableSubmit: function () {
            if( this.fieldsRequiredArentEmpty() == true ){
                return false;
            }
            return true;
        }
    }
}

</script>

<style lang="scss" scoped>

</style>