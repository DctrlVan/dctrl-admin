import request from 'superagent'

const state = {
    memberId: null,
    memberChargedEvents: [],
    memberPaidEvents: []
}

function applyEvent(state, ev){
    switch(ev.type){
        case 'member-charged':
        case 'supplies-used':
            if (ev.memberId == state.memberId){
                state.memberChargedEvents.push(ev)
            }
            break
        case 'member-paid':
        case 'supplies-stocked':
        case 'bounty-claimed':
            if (ev.memberId == state.memberId){
                state.memberPaidEvents.push(ev)
            }
            break
    }
}

const mutations = {
    setIdandReset(state, memberId){
        state.memberId = memberId
        state.memberChargedEvents = []
        state.memberPaidEvents = []
    },
    applyEvent,
    applyMemberEvent: applyEvent
}

const actions = {
    getMemberHistory({ state, commit }, memberId){
        let reqLoc = '/db/member/' + memberId
        commit('setIdandReset', memberId)
        request
            .get(reqLoc)
            .end((err, res)=> {
                if (err || !res.body) {
                    return console.log('no res', err)
                }
                res.body.forEach(ev => {
                    console.log('applying', {ev})
                    commit('applyMemberEvent', ev)
                })
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
