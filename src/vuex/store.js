import Vue from 'vue'
import Vuex from 'vuex'

// state
import cash from './modules/cash'
import members from './modules/members'
import tasks from './modules/tasks'
import resources from './modules/resources'
import sessions from './modules/sessions'

import events from './modules/events'
import eventstream from './modules/eventstream'
import loader from './modules/loader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { loader, members, tasks, resources, cash, events, eventstream, sessions },
  middlewares: [],
  strict: process.env.NODE_ENV !== 'production'
})
