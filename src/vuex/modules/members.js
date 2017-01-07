import _ from 'lodash'

const mutations = {}
const actions = {}
const state = {
    fixedCosts: Math.round(1500 / 1300 * 1000000),
    membershipRevenue: Math.round(17 * 75 / 1300 * 1000000),
    commonsFund: 8643233,
    active: [],
    expected: [],
}

export default {
  state,
  mutations,
  actions
}
