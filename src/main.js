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

// Member components
import Member from './components/Member'
import Members from './components/Members'
// Member forms
import MemberDeactivate from './components/forms/MemberDeactivate'
import MemberCharged from './components/forms/MemberCharged'
import MemberCreate from './components/forms/MemberCreate'
import MemberPaid from './components/forms/MemberPaid'
import MemberActivate from './components/forms/MemberActivate'
import MemberPaidBtc from './components/forms/MemberPaidBtc'

// Bounty components
import Bounty from './components/Bounty'
import Bounties from './components/Bounties'
// Bounty forms
import BountyBoost from './components/forms/BountyBoost'
import BountyClaim from './components/forms/BountyClaim'
import BountyCreate from './components/forms/BountyCreate'
import BountyEdit from './components/forms/BountyEdit'

// Supply components
// Supply forms
import SuppliesStock from './components/forms/SuppliesStock'

//Cash components
// Cash forms
import CashExpense from './components/forms/CashExpense'
import CashReceived from './components/forms/CashReceived'

//Resource components
import Resources from './components/Resources'
import Resource from './components/Resource'
// Resource forms
import ResourceCreate from './components/forms/ResourceCreate'
import ResourceUsed from './components/forms/ResourceUsed'
import ResourceUpdated from './components/forms/ResourceUpdated'
import ResourcePaidBtc from './components/forms/ResourcePaidBtc'
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
      path: '/members',
      component: Members
    },{
      path: '/member/*',
      component: Member
    },{
      path: '/resources',
      component: Resources
    },{
      path: '/resource/*',
      component: Resource
    },{
      path: '/resource_create',
      component: ResourceCreate
    },{
      path: '/resource_used/*',
      component: ResourceUsed
    },{
      path: '/resource_updated/*',
      component: ResourceUpdated
    },{
      path: '/resource_paid_btc/*',
      component: ResourcePaidBtc
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
      path: '/bounty_claim/*',
      component: BountyClaim
    },{
      path: '/bounty_edit/*',
      component: BountyEdit
    },{
      path: '/supplies_stock',
      component: SuppliesStock
    },{
      path: '/BOUNTIES',
      component: Bounties
    },{
      path: '/BOUNTY/*',
      component: Bounty
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
