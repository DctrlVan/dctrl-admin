import request from 'superagent'

const state = {
    bountyId: null,
    bountyClaimedEvents: []
}

function applyEvent(state, ev){
    switch (ev.type){
        case 'bounty-claimed':
            console.log('actually pushing onto object')
            state.bountyClaimedEvents.push(ev)
            break
    }
}

const mutations = {
    applyEvent,
    applyBountyEvent: applyEvent,
    setBountyIdandReset(state, bountyId){
        state.bountyId = bountyId
        state.bountyClaimedEvents = []
    },
}

var activeBounty
const actions = {
    getBountyHistory({ commit }, bountyId){
        console.log('get member history')
        // we need a guard here because the mounted function in Bounty
        // was getting called twice. TODO: better solution
        if (activeBounty === bountyId) {
            return console.log('preventing double call')
        } else {
          activeBounty = bountyId
        }
        commit('setBountyIdandReset', bountyId)
        request
            .get('/db/bounty/' + bountyId)
            .end((err, res)=> {
                if (err || !res.body) {
                    return console.log('no res')
                }
                console.log('res body', res.body)
                res.body.forEach( ev => {
                    console.log('applying event?' , {ev})
                    commit('applyBountyEvent', ev)
                })
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
