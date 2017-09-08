import Vue from 'vue'
import Vuex from 'vuex'

// state
import dctrl from './modules/dctrl'
import members from './modules/members'
import bounties from './modules/bounties'
import resources from './modules/resources'

import member from './modules/member'
import bounty from './modules/bounty'
import resource from './modules/resource'
import eventstream from './modules/eventstream'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { members, bounties, resources, dctrl, member, bounty, resource, eventstream },
  middlewares: [],
  strict: process.env.NODE_ENV !== 'production'
})
