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
import MemberCreate from './components/forms/MemberCreate'
import MemberDeactivate from './components/forms/MemberDeactivate'
import MemberCharge from './components/forms/MemberCharge'
import MemberPaid from './components/forms/MemberPaid'
import MemberPaidStuff from './components/forms/MemberPaidStuff'
import MemberActivate from './components/forms/MemberActivate'
import MemberPaidBtc from './components/forms/MemberPaidBtc'

// Task components
import Task from './components/Task'
import Tasks from './components/Tasks'
// Task forms
import TaskBoost from './components/forms/TaskBoost'
import TaskClaim from './components/forms/TaskClaim'
import TaskCreate from './components/forms/TaskCreate'
import TaskRateUpdate from './components/forms/TaskRateUpdate'

// Cash forms
import CashExpense from './components/forms/CashExpense'
import CashReceive from './components/forms/CashReceive'

//Resource components
import Resources from './components/Resources'
import Resource from './components/Resource'

// Resource forms
import ResourceCreate from './components/forms/ResourceCreate'
import ResourceUse from './components/forms/ResourceUse'
import ResourceStock from './components/forms/ResourceStock'

import Manage from './components/Manage'
import CashHistory from './components/CashHistory'

// TODO refactor this by module too?
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
      path: '/member_charge/*',
      component: MemberCharge
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
      path: '/member_paid_stuff/*',
      component: MemberPaidStuff
    },{
      path: '/member_paid_btc/*',
      component: MemberPaidBtc
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
      path: '/resource_use/*',
      component: ResourceUse
    },{
      path: '/resource_stock/*',
      component: ResourceStock
    },{
      path:'/cash_expense',
      component: CashExpense
    },{
      path: '/cash_receive',
      component: CashReceive
    },{
      path: '/task_create',
      component: TaskCreate
    },{
      path: '/task_claim/*',
      component: TaskClaim
    },{
      path: '/task_rate_update/*',
      component: TaskRateUpdate
    },{
      path: '/tasks',
      component: Tasks
    },{
      path: '/task/*',
      component: Task
    },{
      path: '/task_boost/*',
      component: TaskBoost
    },{
      path:'/manage',
      component: Manage
    },{
      path: '/cash_history',
      component: CashHistory
    }
    ]
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
