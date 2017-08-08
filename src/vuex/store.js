import Vue from 'vue'
import Vuex from 'vuex'

import brain from './modules/brain'
import history from './modules/history'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    brain, history
  },
  middlewares: [],
  strict: process.env.NODE_ENV !== 'production'
})
