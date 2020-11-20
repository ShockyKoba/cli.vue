import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 150
  },
  mutations: {
    mutatorIncreaseCount: function(state, payload){
      state.count += payload;
    },
    mutatorDecreaseCount: function(state, payload){
      state.count -= payload;
    }
  },
  actions: {
    modifyCount: function({commit}, config){
      let statement = config.statement;
      let quantity = parseInt(config.quantity);

      if( statement == 'add' ){
        commit('mutatorIncreaseCount', quantity);
      }else if( statement == 'remove' ){
        commit('mutatorDecreaseCount', quantity);
      }
      
    },
  },
  modules: {
  }
})
