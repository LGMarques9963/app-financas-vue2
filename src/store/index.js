import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || '',
    userLoggedIn: false,
    drawer: true,
    user: {}
  },
  getters: {
    userLoggedIn: state => {
      return state.userLoggedIn;
    },
    drawer: state => {
      return state.drawer;
    },
    user: state => {
      return state.user;
    }
  },
  mutations: {
    setToken(state, token) {    
      state.token = token
    },
    setUserLoggedIn(state, userLoggedIn) {
      state.userLoggedIn = userLoggedIn
    },
    toggleDrawer(state) {
      state.drawer = !state.drawer
    },
    setUser(state, user) {
      state.user = user
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
    },
    toggleDrawer({ commit }) {
      commit('toggleDrawer')
    },
    setUser({ commit }, user) {
      commit('setUser', user)
    },
    updateUserLoggedIn({ commit }, userLoggedIn) {
      commit('setUserLoggedIn', userLoggedIn)
    },
  },
  modules: {},
});
