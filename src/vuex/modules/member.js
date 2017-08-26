import request from 'superagent'

const state = {
    address: null,
    listOfMemberChargedActions: [{

    }],
    listOfMemberPaidActions: [{

    }]
}

const mutations = {
    setPaidActions(state, paidActions){
        console.log({paidActions})
        state.listOfMemberPaidActions = paidActions
    },
    setChargedActions(state, chargedActions){
        console.log({chargedActions})
        state.listOfMemberChargedActions = chargedActions
    },
    setId(state, address){
        state.address = address
    }
}

const actions = {
    getMemberHistory({ state, commit }, memberId){
        console.log("dispatching getHistory", {state, memberId})
        let reqLoc = '/db/member/' + memberId
        commit('setId', memberId)
        commit('setPaidActions', [])
        commit('setChargedActions',[])
        request
            .get(reqLoc)
            .end((err, res)=> {
                if (err || !res.body) {
                    return console.log('no res')
                }
                console.log('Setting action arrays')
                commit('setPaidActions', res.body.listOfMemberPaidActions)
                commit('setChargedActions', res.body.listOfMemberChargedActions)
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
