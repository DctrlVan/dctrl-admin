import request from 'superagent'

const state = {
    bountyId: null,
    bountyClaimedEvents: []
}

const mutations = {
    setClaimedEvents(state, ev){
        state.bountyClaimed = ev
    },
    setBountyId(state, bountyId){
        state.bountyId = bountyId
    },
}

const actions = {
    getBountyHistory({ state, commit }, bountyId){
        let reqLoc = '/db/bounty/' + bountyId
        commit('setBountyId', bountyId)
        commit('setPaidEvents', [])
        request
            .get(reqLoc)
            .end((err, res)=> {
                if (err || !res.body) {
                    return console.log('no res')
                }
                commit('setClaimedEvents', res.body.listOfBountyClaimedEvents)
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
