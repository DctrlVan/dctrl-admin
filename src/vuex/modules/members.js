import _ from 'lodash'

const mutations = {}
const actions = {}
const state = {
    fixedCosts: Math.round(1500 / 1300 * 1000000),
    membershipRevenue: Math.round(17 * 75 / 1300 * 1000000),
    commonsFund: 8643233,
    active: [{"active?":true,"address":"39gKXN6wSZQ9e3K9AsPEsugpSLqrk18BTZ","balance":"-15.0","email":"cameron.john.gray@gmail.com","fob":"0006048801","name":"Cam"},{"active?":true,"address":"36baoAjzRS27JoKrKWmXw1R7FaaGoPaGaz","balance":"-6.0","email":"rensylvain@gmail.com ","fob":"0008201890","name":"Ren"},{"active?":true,"address":"3JoGYFxUmEDCYkNihu1MV4sL8zBxRhy63d","balance":"-3.0","email":"mitch@mitchbrown.ca","fob":"0013324888","name":"Mitch"}],
    expected: [],
}

export default {
  state,
  mutations,
  actions
}
