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
import ActiveBounties from './components/ActiveBounties'
import HistoryBounty from './components/HistoryBounty'
import HistoryMember from './components/HistoryMember'
import MemberList from './components/MemberList'

import BountyBoost from './components/forms/BountyBoost'
import BountyClaim from './components/forms/BountyClaim'
import BountyCreate from './components/forms/BountyCreate'
import BountyEdit from './components/forms/BountyEdit'

import CashExpense from './components/forms/CashExpense'
import CashReceived from './components/forms/CashReceived'

import MemberDeactivate from './components/forms/MemberDeactivate'
import MemberCharged from './components/forms/MemberCharged'
import MemberCreate from './components/forms/MemberCreate'
import MemberPaid from './components/forms/MemberPaid'
import MemberActivate from './components/forms/MemberActivate'
import MemberPaidBtc from './components/forms/MemberPaidBtc'

import SuppliesStock from './components/forms/SuppliesStock'

const routes = [{
    path: '/',
    component: App,
    children: [{
      path: '/',
      component: Home
    },{
      path: '/member_create',
      component: MemberCreate
    },{
      path: '/member_paid/*',
      component: MemberPaid
    },{
      path: '/member_charged/*',
      component: MemberCharged
    },{
      path: '/member_deactivate',
      component: MemberDeactivate
    },{
      path: '/member_activate/*',
      component: MemberActivate
    },{
      path: '/member_list',
      component: MemberList
    },{
      path: '/history_member/*',
      component: HistoryMember
    },{
      path: '/member_paid_btc/*',
      component: MemberPaidBtc
    },{
      path:'/cash_expense',
      component: CashExpense
    },{
      path: '/cash_received',
      component: CashReceived
    },{
      path: '/bounty_create',
      component: BountyCreate
    },{
      path: '/bounty_claim',
      component: BountyClaim
    },{
      path: '/bounty_edit/*',
      component: BountyEdit
    },{
      path: '/supplies_stock',
      component: SuppliesStock
    },{
      path: '/ACTIVE_BOUNTIES',
      component: ActiveBounties
    },{
      path: '/HISTORY_BOUNTY/*',
      component: HistoryBounty
    },{
      path: '/bounty_boost/*',
      component: BountyBoost
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
