import { createStore } from 'vuex';

export default createStore({


  state: {
    tasks: [],
    theTask: {
      id: '',
      name: '',
      author: '',
      type: '',
      for: '',
      extras: {},
      description: '',
    }
  },


  mutations: {
    createTaskMutator: function (state, payload) {
      state.tasks.push(payload);
      // console.log(state.tasks);
    },
    deleteTaskMutator: function(state, payload){
      state.tasks = state.tasks.filter(item => item.id !== payload);
      // console.log(state.tasks);
    },
    getTaskMutator: function(state, payload){
      state.theTask = state.tasks.find(item => item.id === payload);
      // console.log(state.tasks);
    },
    updateTaskMutator: function(state, payload){
      state.tasks = state.tasks.map(item => item.id === payload.id ? payload : item);
      // console.log(state.tasks);
    },
    loadDBMutator: function(state, payload){
      state.tasks = JSON.parse(localStorage.getItem('db:tasks'));
      // console.log(state.tasks);
    },
    pushDBMutator: function(state, payload){
      localStorage.setItem('db:tasks', JSON.stringify(state.tasks))
      // console.log(state.tasks);
    },
  },
  

  actions: {
    createTask: function({commit}, data){
      // console.log('pushing...');
      commit('createTaskMutator', data);
      commit('pushDBMutator');
      // console.log('end pushing...');
    },
    deleteTask: function({commit}, data){
      if(data.trim() !== ''){
        let response = confirm('Are you sure you want to delete the task?');

        if(response){
          commit('deleteTaskMutator', data);
          commit('pushDBMutator');
        }
      }
      // console.log('ID Not Selected.');
    },
    getTask: function({commit}, data = null){
      if( data !== null){
        commit('getTaskMutator', data);
      }
    },
    updateTask: function({commit}, data = null){
      commit('updateTaskMutator', data);
      commit('pushDBMutator');
    },
    loadLocalStorageDB: function({commit}){
      if( localStorage.getItem('db:tasks') ){
        commit('loadDBMutator');
        // console.log('exist db');
      }else{
        localStorage.setItem('db:tasks', JSON.stringify([]));
        // console.log('create db');
      }
    }
  },


  modules: {
  }


});
