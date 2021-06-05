import { createStore } from 'vuex'

export default createStore({
  state: {
    language: "",
    content: "",
    output: "$~ Output here",
    version: ""
  },
  mutations: {
    setLang(state, value) {
      state.language = value
    }
  },
  actions: {
    setLang({commit}, value) {
      commit('setLang', value);
    }
  },
  getters: {
    language(state) {
      return state.language
    },
    output(state) {
      return state.output
    }
  },
  modules: {
  }
})
