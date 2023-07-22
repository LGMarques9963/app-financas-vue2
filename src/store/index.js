import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    userLoggedIn: false,
  },
  getters: {
    userLoggedIn: state => {
      return state.userLoggedIn;
    }
  },
  mutations: {
    setToken(state, token) {    
      state.token = token
    },
    setUserLoggedIn(state, userLoggedIn) {
      state.userLoggedIn = userLoggedIn
    }
  },
  actions: {
    login({ commit }, token) {
      localStorage.setItem("token", token);
      commit('setToken', token)
      commit('setUserLoggedIn', true)
    },
    logout({ commit }) {
      localStorage.removeItem("token");
      commit('setToken', '')
      commit('setUserLoggedIn', false)
    }
  },
  modules: {},
});
