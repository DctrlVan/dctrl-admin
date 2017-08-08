import request from 'superagent'

const state = {
    address: null,
    listOfMemberChargedActions: [],
    listOfMemberPaidActions: []
}

const mutations = {
    setPaidActions(state, paidActions){
        state.listOfMemberPaidActions = paidActions
    },
    setChargedActions(state, chargedActions){
        state.listOfMemberChargedActions = chargedActions
    }
}

const actions = {
    getHistory({ state, commit }, address){
        console.log({state, address})
        let reqLoc = '/db/member/' + address
        state.address = address
        state.listOfMemberPaidActions = []
        state.listOfMemberChargedActions = []
        request
            .get(reqLoc)
            .end((err, res)=> {
                if (err) {
                    return null
                }
                if (!res.body){
                    return console.log('no res')
                }
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
