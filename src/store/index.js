import Vue from 'vue'
import Vuex from 'vuex'
import * as auth from '@/utils/auth.js'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: auth.getUser()
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      auth.setUser(data)
    }
  },
  actions: {
  },
  modules: {
  }
})
