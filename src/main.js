// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './vuex/store'

Vue.use(VueRouter)
Vue.use(Vuex)

import App from './components/App'
import Home from './components/Home'
import Transparency from './components/Transparency'
import Bounties from './components/Bounties'
import Commitments from './components/Commitments'
import Projects from './components/Projects'
import Ethos from './components/Ethos'
import About from './components/About'
import Shop from './components/Shop'
import Calendar from './components/Calendar'

const routes = [{
    path: '/',
    component: App,
    children: [{
      path: '/',
      component: Home
    },{
      path: '/transparency',
      component: Transparency
    },{
      path: '/ethos',
      component: Ethos
    },{
      path: '/about',
      component: About
    },{
      path: '/bounties',
      component: Bounties
    },{
      path: '/commitments',
      component: Commitments
    },{
      path: '/projects',
      component: Projects
    },{
      path: '/calendar',
      component: Calendar
    },{
      path: '/shop',
      component: Shop
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
