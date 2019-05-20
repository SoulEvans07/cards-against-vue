import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    rooms: null
  },
  mutations: {
    setUser(state, data) {
      state.user = data;
    },

    setRoomList(state, data){
      state.rooms = data;
    }
  },
  actions: {
    refreshRoomList({commit}, data){
      commit('setRoomList', data);
    },
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
