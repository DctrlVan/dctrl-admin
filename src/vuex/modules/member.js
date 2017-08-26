import request from 'superagent'

const state = {
    memberId: null,
    listOfMemberChargedEvents: [{

    }],
    listOfMemberPaidEvents: [{

    }]
}

const mutations = {
    setPaid(state, paid){
        console.log({paid})
        state.listOfMemberPaid = paid
    },
    setCharged(state, charged){
        console.log({charged})
        state.listOfMemberCharged = charged
    },
    setId(state, memberId){
        state.memberId = memberId
    },
    applyEvent(state, ev){
        switch(ev.type){
            case 'member-paid':
                if (ev.memberId == state.memberId){
                    state.listOfMemberPaid.push(ev)
                }
                break
            case 'member-charged':
                if (ev.memberId == state.memberId){
                    state.listOfMemberCharged.push(ev)
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
                commit('setPaid', res.body.listOfMemberPaidEvents)
                commit('setCharged', res.body.listOfMemberChargedEvents)
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
