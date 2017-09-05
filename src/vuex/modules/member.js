import request from 'superagent'

const state = {
    memberId: null,
    memberChargedEvents: [{
    }],
    memberPaidEvents: [{
      // type: 'member-paid',
      // amount: 9001

    }]
}

const mutations = {
    setPaid(state, paid){
        console.log({paid})
        state.memberPaidEvents = paid
    },
    setCharged(state, charged){
        console.log({charged})
        state.memberChargedEvents = charged
    },
    setId(state, memberId){
        state.memberId = memberId
    },
    applyEvent(state, ev){
        switch(ev.type){
            case 'member-paid':
                if (ev.memberId == state.memberId){
                    state.memberPaidEvents.push(ev)
                }
                break
            case 'member-charged':
                if (ev.memberId == state.memberId){
                    state.memberChargedEvents.push(ev)
                }
                break
        }
    }
}

const actions = {
    getMemberHistory({ state, commit }, memberId){
        console.log("dispatching getHistory", {state, memberId})
        let reqLoc = '/db/member/' + memberId
        commit('setId', memberId)
        commit('setPaid', [])
        commit('setCharged',[])
        request
            .get(reqLoc)
            .end((err, res)=> {
                if (err || !res.body) {
                    return console.log('no res')
                }
                commit('setPaid', res.body.memberPaidEvents)
                commit('setCharged', res.body.memberChargedEvents)
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
