import Vue from 'vue'
import Vuex from 'vuex'

// state
import cash from './modules/cash'
import members from './modules/members'
import tasks from './modules/tasks'
import resources from './modules/resources'
import sessions from './modules/sessions'
import invoices from './modules/invoices'

import events from './modules/events'
import eventstream from './modules/eventstream'
import loader from './modules/loader'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
      loader, members, tasks,
      resources, cash, events,
      eventstream, sessions,
      invoices
  },
  getters: {
      memberId(state, getters){
          let id
          state.sessions.forEach( s => {
              if (s.session === state.loader.session){
                  id = s.ownerId
              }
          })
          return id
      },
      isAdmin(state, getters){
          let isAdmin
          state.members.forEach(member => {
              if( getters.memberId === memberId){
                  isAdmin = member.isAdmin // TODO
              }
          })
          return isAdmin
      },
      isLoggedIn(state, getters){
          let isLoggedIn = !!getters.memberId
          return isLoggedIn
      }
  },
  middlewares: [],
  strict: process.env.NODE_ENV !== 'production'
})
