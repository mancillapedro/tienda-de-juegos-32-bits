import Vue from 'vue'
import Vuex from 'vuex'
// import juegos from './juegos.json'

const juegos = require('./juegos.json')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    juegos: juegos
  },
  getters: {
    keysGame({ juegos }) {
      return Object.keys(juegos[0]).filter(key => key != 'color')
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
