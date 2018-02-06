import request from 'superagent'
import uuidV1 from 'uuid/v1'

const actions = {
  loadCurrent({ commit, state }){
      if (state.token){
        request
            .post('/state')
            .set("Authorization", state.token)
            .end((err, res)=>{
                if (err || !res.body) {
                    // loadTestState(commit)
                } else {
                    commit('setCurrent', res.body)
                }
            })
      }
  }
}

const state = {
    token: '',
    session: '',
    id: ''
}

const mutations = {
    setAuth(loader, auth){
        loader.token = auth.token
        loader.session = auth.session
    }
}

export default {
    state,
    mutations,
    actions
}


function loadTestState(commit){
    let i = 0
    while (i < 10){
      i++
      commit('applyEvent', {
        memberId: uuidV1(),
        type: 'member-created',
        name: 'Test ' + i * (11 + i*i),
        balance: i - 5,
        active: i
      })

      commit('applyEvent', {
        resourceId: uuidV1(),
        type: "resource-created",
        resourceId: 'test-id',
        charged: 3,
        stock: 0,
        current: [{
          memberId: 'test'
        }],
        info: {}
      })

      commit('applyEvent', {
        taskId: uuidV1(),
        type: "task-created",
        // taskId: uuidV1(),
        lastClaimed: Date.now(),
        name: 'test',
        instructions: 'test 1. test 2. test 3.',
        monthlyValue: 10000,
        // fob: ,
        cap: 10,
        boost: 1,
        oneTime: false
      })
    }
}
