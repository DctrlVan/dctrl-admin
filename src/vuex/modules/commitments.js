import _ from 'lodash'

const mutations = {
}

const state = {
  hwaiting: [{
      member: 'Cam',
      amount: 40000,
      deadline: new Date("2017/01/11"),
      description: 'Put in at least two hours towards understanding vue and the dctrlapp.',
  },{
      member: 'Taylor',
      amount: 40000,
      deadline: new Date("2017/01/11"),
      description: 'Make it work.',
  },{
      member: 'Taylor',
      amount: 40000,
      deadline: new Date("2017/01/11"),
      description: 'Make it work.',
  }],
  claimed: []
}

const actions = {
}

export default {
  state,
  mutations,
  actions,
}
