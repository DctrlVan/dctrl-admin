// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './vuex/store'

Vue.use(VueRouter)
Vue.use(Vuex)

import App from './components/App'
import Members from './components/Members'
import Bounties from './components/Bounties'
import Commitments from './components/Commitments'
import Projects from './components/Projects'

import Calendar from './components/Calendar'
const routes = [{
    path: '/',
    component: App,
    children: [{
      path: '/members',
      component: Members
    },{
      path: '/bounties',
      component: Bounties
    }, {
      path: '/commitments',
      component: Commitments
    },{
      path: '/projects',
      component: Projects
    },{
      path: '/calendar',
      component: Calendar
    }]
  }]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }
})

const app = new Vue({
  router,
  store,
}).$mount('#app')
