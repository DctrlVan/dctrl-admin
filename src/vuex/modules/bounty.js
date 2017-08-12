import request from 'superagent'

const state = {
    bountyId: null,
    listOfBountyPaidActions: []
}

const mutations = {
    setPaidActions(state, paidActions){
        console.log({paidActions})
        state.listOfBountyPaidActions = paidActions
    },
    setBountyId(state, bountyId){
        state.bountyId = bountyId
    }
}

const actions = {
    getBountyHistory({ state, commit }, bountyId){
        console.log("dispatching getBountyHistory", {state, bountyId})
        let reqLoc = '/db/bounty/' + bountyId
        commit('setBountyId', bountyId)
        commit('setPaidActions', [])
        request
            .get(reqLoc)
            .end((err, res)=> {
                if (err || !res.body) {
                    return console.log('no res')
                }
                console.log('Setting action arrays')
                commit('setPaidActions', res.body.listOfBountyPaidActions)
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
