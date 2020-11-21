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
      state.tasks = payload;
      // console.log(state.tasks);
    },
    pushDBMutator: function(state, payload){
      localStorage.setItem('db:tasks', JSON.stringify(state.tasks))
      // console.log(state.tasks);
    },
  },
  

  actions: {
    manageTask: async function({commit}, data){

      try{
        const pushDB = await fetch(`https://vue3-c3322.firebaseio.com/tasks/${data.id}.json`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });

        let response = await pushDB.json();
        console.log(response);

      }catch(error){
          console.log(error);
      }


    },
    deleteTask: async function({commit}, data){
      if(data.trim() !== ''){
        let response = confirm('Are you sure you want to delete the task?');

        if(response){

          try{
            const pushDB = await fetch(`https://vue3-c3322.firebaseio.com/tasks/${data}.json`, {
              method: 'DELETE',
            });
          }catch(r){
            console.log('Error!');
            console.log(r);
          }

        }
      }
      // console.log('ID Not Selected.');
    },
    getTask: function({commit}, data = null){
      if( data !== null){
        commit('getTaskMutator', data);
      }
    },
    loadDB: async function({commit}){
      try{
        const getDB = await fetch('https://vue3-c3322.firebaseio.com/tasks.json');
        const response = await getDB.json();
        const tasksArray = [];

        for(let item in response){
          tasksArray.push(response[item]);
        };

        commit('loadDBMutator', tasksArray);

      }catch(error){
        console.log('Error!');
        console.log(error);
      }

    }
  },


  modules: {
  }


});
