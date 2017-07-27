import request from 'superagent'

const state = {
    dctrl:{
        supplies: {bitpepsi: '0'},
    },
    members:[],
    bounties:[]
}

const mutations = {
    load(state, newState){
        state.dctrl = newState.dctrl
        state.members = newState.members
        state.bounties = newState.bounties
        console.log({state})
    }
}

const actions = {
    getState({ state, commit }){
        request.get('/current_state')
            .end((err, res)=> {
                commit('load', res.body)
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
