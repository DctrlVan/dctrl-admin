import Vue from 'vue'
import Vuex from 'vuex'
import socket from 'socket.io-client'

// state
import dctrl from './modules/dctrl'
import members from './modules/members'
import bounties from './modules/bounties'

import member from './modules/member'
import bounty from './modules/bounty'

const s = socket()

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { members, bounties, dctrl, member, bounty },
  middlewares: [],
  strict: process.env.NODE_ENV !== 'production'
})
