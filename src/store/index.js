import { createStore } from 'vuex';
import router from '../router';
import { alertNotification } from '../functions.js';
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
    },
    user: null,
    api_token: 'AIzaSyDeUnidhmKVBHLyMASbHkXSAwt1hgPstsw'
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
    setUserMutator: function(state, payload){
      state.user = payload;
    },
    signoffMutator: function(state){
      state.user = null;
    },
    loadUserFromLocalStorage: function(state, payload){
      state.user = payload;
    }
  },
  

  actions: {
    loginUser: async function({commit, state}, user){
      console.log(user);
      let udata = {
        email: user.email,
        password: user.pass,
        returnSecureToken: true
      };

      try{

        const getUser = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${state.api_token}`, {
          method: 'POST',
          body: JSON.stringify(udata)
        });

        let response = await getUser.json();

        console.log('Server Response: ');
        console.log(response);
        console.log(udata);

        if(response.error){
          alertNotification('Incorrect Password or Email', 'danger');
          return console.log('ERROR!');
        }

        commit('setUserMutator', response);

        localStorage.setItem('auth:user', JSON.stringify(response));

        alertNotification('Logged In!', 'success');
        router.push('/');
        console.log('OK!');



      }catch(r){

        alertNotification('Some error has ocurred!', 'success');
        console.log('Fetch Error: ');
        console.log(r);
      }


    },
    registerUser: async function({commit, state}, user){
      console.log(user);
      let udata = {
        email: user.email,
        password: user.pass,
        returnSecureToken: true
      };

      try{
        const putUser = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${state.api_token}`, {
          method: 'POST',
          body: JSON.stringify(udata)
        });

        let response = await putUser.json();
        console.log('Response: ');
        if(response.error){
          return console.log(response.error);
        }

        alertNotification('Registered. Please Sign In!', 'success');
        router.push('/login');
        console.log('OK!');

      }catch(r){

        alertNotification('Some error has ocurred!', 'success');
        console.log('Fetch Error: ');
        console.log(r);
      }
    },
    manageTask: async function({commit, state}, data){

      try{
        const pushDB = await fetch(`https://vue3-c3322.firebaseio.com/db:tasks/${state.user.localId}/${data.id}.json?auth=${state.user.idToken}`, {
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
    deleteTask: async function({commit, state}, taskID){
      if(taskID.trim() !== ''){
        let response = confirm('Are you sure you want to delete the task?');

        if(response){

          try{
            const pushDB = await fetch(`https://vue3-c3322.firebaseio.com/db:tasks/${state.user.localId}/${taskID}.json?auth=${state.user.idToken}`, {
              method: 'DELETE',
            });
          }catch(r){
            console.log('Error!');
            console.log(r);
          }

        }
      }
    },
    loadDB: async function({commit, state}){
      try{
        const getDB = await fetch(`https://vue3-c3322.firebaseio.com/db:tasks/${state.user.localId}.json?auth=${state.user.idToken}`);
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
    },
    getTask: function({commit}, data = null){
      if( data !== null){
        commit('getTaskMutator', data);
      }
    },
    signoff: function({commit}){
      console.log('close session');
      commit('signoffMutator');
      localStorage.removeItem('auth:user');
      router.push('/login');
      alertNotification('Session Closed!', 'warning');
    },
    checkLoggedIn: function({commit}){
      if(localStorage.getItem('auth:user') ){
        let user = JSON.parse(localStorage.getItem('auth:user'));
        commit('loadUserFromLocalStorage', user);
      }else{
        return commit('loadUserFromLocalStorage', null);
      }
    },
  },

  getters: {
    authUser(state){
      return !!state.user
    }
  },
  modules: {
  }


});
