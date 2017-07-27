import Vue from 'vue'
import Vuex from 'vuex'

import brain from './modules/brain'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    brain
  },
  middlewares: [],
  strict: process.env.NODE_ENV !== 'production'
})
