import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    players: null
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },

    setPlayers(state, data){
      state.players = data;
    }
  },
  actions: {
    login({ commit }, data) {
      commit('setUser', data);
      localStorage.setItem('user', JSON.stringify(data));
    },
    logout({ commit }) {
      localStorage.removeItem('user');
      commit('setUser', null);
    },
  }
});
