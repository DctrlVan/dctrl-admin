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
    setBountyId(state, bountyId){
        state.bountyId = bountyId
    },
}

const actions = {
    getBountyHistory({ commit }, bountyId){
        commit('setBountyId', bountyId)
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
