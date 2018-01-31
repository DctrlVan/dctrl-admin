import request from 'superagent'

const state = {
    memberId: null,
    memberChargedEvents: [],
    memberPaidEvents: []
}

function applyEvent(state, ev){
    switch(ev.type){
        case 'member-charged':
        case 'resource-used':
            if (ev.memberId == state.memberId){
                console.log('inserting member charged')
                state.memberChargedEvents.push(ev)
            }
            break
        case 'member-paid':
        case 'resource-stocked':
        case 'task-claimed':
            if (ev.memberId == state.memberId){
                console.log('inserting member paid')
                state.memberPaidEvents.push(ev)
            }
            break
    }
}

const mutations = {
    setMemberIdandReset(state, memberId){
        state.memberId = memberId
        state.memberChargedEvents = []
        state.memberPaidEvents = []
    },
    applyEvent,
    applyMemberEvent: applyEvent
}

var activeMember = null
const actions = {
    getMemberHistory({ state, commit }, memberId){
        console.log('get member history')
        // we need a guard here because the mounted function in Member
        // was getting called twice. TODO: better solution
        if (activeMember === memberId) {
            return console.log('preventing double call')
        } else {
          activeMember = memberId
        }
        let reqLoc = '/db/member/' + memberId
        commit('setMemberIdandReset', memberId)
        request
            .set('auth')
            .post(reqLoc)
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
