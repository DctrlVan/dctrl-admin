import request from 'superagent'

const state = {
    dctrl:{},
    members:[],
    bounties:[]
}

const mutations = {
    load(state, newState){
        state.dctrl = newState.dctrl
        state.members = newState.members
        state.bounties = newState.bounties
    }
}

const actions = {
    getState({ state, commit }){
        request.get('/current_state')
            .end((err, newState)=> {
                console.log({err, newState})
                commit('load', newState)
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
