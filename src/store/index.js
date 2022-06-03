import Vue from 'vue'
import Vuex from 'vuex'

const juegos = require('./juegos.json')

Array.prototype.findForCodigo = function (codigo) { return this.find(element => element.codigo == codigo) }

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: juegos,
    colorsGames: [...new Set(juegos.map(game => game.color))],
    dictionaryColors: {
      red: "rojo",
      blue: "azul",
      green: "verde",
      black: "negro",
    },
  },
  getters: {
    keysGame({ games }) { return Object.keys(games[0]) },
    totalGames({ games }) { return games.reduce((total, game) => total + Number(game.stock), 0) },
  },
  mutations: {
    CHANGE_COLOR({ games }, { codigo, color }) { games.findForCodigo(codigo).color = color },
    INCREMENT_STOCK({ games }, codigo) { games.findForCodigo(codigo).stock++ },
    DECREMENT_STOCK({ games }, codigo) { const game = games.findForCodigo(codigo); game.stock > 0 && game.stock-- },
  },
  actions: {
    changeColor({ commit }, params) { commit('CHANGE_COLOR', params) },
    incrementStock({ commit }, codigo) { commit('INCREMENT_STOCK', codigo) },
    decrementStock({ commit }, codigo) { commit('DECREMENT_STOCK', codigo) },
  },
})
