// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import store from './vuex/store'

Vue.use(VueRouter)
Vue.use(Vuex)

import App from './components/App'

import ActiveBounties from './components/ActiveBounties'
import BountyList from './components/BountyList'
import HistoryBounty from './components/HistoryBounty'
import Home from './components/Home'
import Member from './components/Member'
import MemberList from './components/MemberList'

import BoostBounty from './components/forms/BoostBounty'
import CashExpense from './components/forms/CashExpense'
import CashReceived from './components/forms/CashReceived'
import ClaimBounty from './components/forms/ClaimBounty'
import CreateBounty from './components/forms/CreateBounty'
import DeactivateMember from './components/forms/DeactivateMember'
import EditBounty from './components/forms/EditBounty'
import MemberCharged from './components/forms/MemberCharged'
import MemberCreate from './components/forms/MemberCreate'
import MemberPaid from './components/forms/MemberPaid'
import MemberPaidBtc from './components/forms/MemberPaidBtc'


import StockSupplies from './components/forms/StockSupplies'

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
      component: DeactivateMember
    },{
      path: '/member_list',
      component: MemberList
    },{
      path:'/cash_expense',
      component: CashExpense
    },{
      path: '/cash_received',
      component: CashReceived
    },{
      path: '/create_bounty',
      component: CreateBounty
    },{
      path: '/claim_bounty',
      component: ClaimBounty
    },{
      path: '/bounty_list',
      component: BountyList
    },{
      path: '/edit_bounty/*',
      component: EditBounty
    },{
      path: '/stock_supplies',
      component: StockSupplies
    },{
      path: '/ACTIVE_BOUNTIES',
      component: ActiveBounties
    },{
      path: '/HISTORY_BOUNTY/*',
      component: HistoryBounty
    },{
      path: '/boost_bounty/*',
      component: BoostBounty
    },{
      path: '/member/*',
      component: Member
    },{
      path: '/member_paid_btc/*',
      component: MemberPaidBtc
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
