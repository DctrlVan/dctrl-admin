import Vue from 'vue'
import Vuex from 'vuex'

import brain from './modules/brain'
import member from './modules/member'
import bounty from './modules/bounty'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    brain, member, bounty
  },
  middlewares: [],
  strict: process.env.NODE_ENV !== 'production'
})
