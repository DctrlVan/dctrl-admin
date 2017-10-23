import Vue from 'vue'
import Vuex from 'vuex'

// state
import dctrl from './modules/dctrl'
import members from './modules/members'
import tasks from './modules/tasks'
import resources from './modules/resources'

import member from './modules/member'
import task from './modules/task'
import resource from './modules/resource'
import eventstream from './modules/eventstream'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { members, tasks, resources, dctrl, member, task, resource, eventstream },
  middlewares: [],
  strict: process.env.NODE_ENV !== 'production'
})
