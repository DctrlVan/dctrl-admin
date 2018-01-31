import request from 'superagent'
import { cashMuts } from '../../mutations'

const state = {
    cash: 0,
}

const mutations = {
    setCurrent(state, current){
        state.cash = current.cash
    },
    applyEvent: cashMuts
}

const actions = {}

module.exports = {
    state,
    mutations,
    actions
}
