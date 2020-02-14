import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    /* Partially Implemented not for production use */
    getCounter: state => state.counter
  },
  mutations: {
    increment: state => state.counter++,
    decrement: state => state.counter--
  },
  actions: {
    increment() {
      this.commit('increment');
    },
    decrement() {
      this.commit('decrement');
    }
  },
  modules: {
  }
})
