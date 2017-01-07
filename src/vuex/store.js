import Vue from 'vue'
import Vuex from 'vuex'

import director from './modules/director'
import members from './modules/members'
import bounties from './modules/bounties'
import commitments from './modules/commitments'
import calendar from './modules/calendar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    director,
    members,
    bounties,
    commitments,
    calendar,
  },
  middlewares: [],
  strict: process.env.NODE_ENV !== 'production'
})
