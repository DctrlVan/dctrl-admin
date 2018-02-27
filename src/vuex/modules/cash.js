import request from 'superagent'
import { cashMuts } from '../../mutations'

const state = {
    cash: 0,
    spot: 123456,
    currency: 'CAD'
}

const mutations = {
    setCurrent(state, current){
        state.cash = current.cash.cash
        state.spot = current.cash.spot
        state.currency = current.cash.currency
    },
    applyEvent: cashMuts
}

const actions = {}

module.exports = {
    state,
    mutations,
    actions
}
