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
    setAddress(state, address){
        state.address = address
    }
}

const actions = {
    getHistory({ state, commit }, address){
        console.log("dispatching getHistory", {state, address})
        let reqLoc = '/db/member/' + address
        commit('setAddress', address)
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
