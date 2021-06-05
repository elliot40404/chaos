import { createStore } from 'vuex'

export default createStore({
  state: {
    languages: [],
    language: "",
    content: "",
    output: "$~ Output here",
    version: ""
  },
  mutations: {
    setLang(state, value) {
      state.language = value
    },
    setLangs(state, value) {
      state.languages = value
    },
    setVer(state) {
      const ver = state.languages.find((e) => e.language === state.language);
      state.version = ver.version;
    },
    setOutput(state, value) {
      state.output = value;
    },
    setCode(state, value) {
      state.content = value;
    }
  },
  actions: {
    setLang({commit}, value) {
      commit('setLang', value);
      commit('setVer');
    },
    setLangs({ commit }, value) {
      commit('setLangs', value);
    },
    setOutput({commit}, value) {
      commit('setOutput', value);
    },
    setCode({commit}, value) {
      commit('setCode', value);
    }
  },
  getters: {
    language(state) {
      return state.language
    },
    languages(state) {
      return state.languages
    },
    version(state) {
      return state.version
    },
    output(state) {
      return state.output
    },
    code(state) {
      return state.content
    }
  }
})
