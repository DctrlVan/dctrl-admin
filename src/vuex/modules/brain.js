import request from 'superagent'

const state = {
    dctrl:{
        supplies: {bitpepsi: '0'},
        cash: {CAD: '0'}
    },
    members:[
      {"active":23,"address":"","balance":"0.012961290776729584","email":"","fob":"","name":"Kenta"},
      {"active":4,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":6,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":7,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":8,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":9,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":1,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":23213,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":1,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":4,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":13,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":2,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":0,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":1,"address":"","balance":"0.0","email":"","fob":"","name":"Dane"},
      {"active":5,"address":"","balance":"-15.0","email":"","fob":"","name":"Cam"}
    ],
    bounties:[
      {"description":"Smile bounty","claimed?":false,"address":"","last-claimed":1497052354,"fob":"","name":"Smile","value":"500.23","bounty-id":"3b47bed0-4cc7-11e7-9e1b-7b250854a0f6","notes":"1497052354163","paid?":false},
      {"description":"asdasd asdasd","address":"","last-claimed":"1500938869514","fob":"0000000000","name":"Test","value":"224124","bounty-id":"b4f976a0-70c7-11e7-8f15-2fa4d34716e7","notes":"dctrl-admin"},
      {"description":"Gather all trash into full bag, then put into bin in alley.","claimed?":false,"address":"","last-claimed":1497319928,"fob":"","name":"Trash","value":"68.23","bounty-id":"11756c70-4d75-11e7-8b2c-4d64b14f2e3c","notes":"1497319928369","paid?":false}
    ]
}

const mutations = {
    load(state, newState){
        state.dctrl = newState.dctrl
        state.members = newState.members
        state.bounties = newState.bounties
        console.log({state})
    }
}

const actions = {
    getState({ state, commit }){
        request.get('/current_state')
            .end((err, res)=> {
                console.log(res.body)
                if (res.body){
                    commit('load', res.body )
                }
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
