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
import NewMember from './components/NewMember'
import DeactivateMember from './components/DeactivateMember'
import MemberList from './components/MemberList'

const routes = [{
    path: '/',
    component: App,
    children: [{
      path: '/',
      component: Home
    },{
      path: '/new_member',
      component: NewMember
    },{
      path: '/deactivate_member',
      component: DeactivateMember
    },{
      path: '/member_list',
      component: MemberList
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
