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
                  id = s.ownerId.slice()
              }
          })
          return id
      },
      isAdmin(state, getters){
          let isAdmin
          state.members.forEach(member => {
              if(getters.memberId === member.memberId){
                  member.badges.forEach( b => {
                      if (b === 'admin'){
                          isAdmin = true
                      }
                  })
              }
          })
          console.log('is admin asd', isAdmin)
          return isAdmin
      },
      isLoggedIn(state, getters){
          let isLoggedIn = !!getters.memberId
          return isLoggedIn
      },
      name(state, getters){
          let name
          state.members.forEach(member => {
              if( getters.memberId === member.memberId){
                  name = member.name.slice()
              }
          })
          return name
      },
      address(state, getters){
          let address
          state.members.forEach(member => {
              if( getters.memberId === member.memberId){
                  address = member.address.slice() // TODO
              }
          })
          return address
      }
  },
  middlewares: [],
  strict: process.env.NODE_ENV !== 'production'
})
