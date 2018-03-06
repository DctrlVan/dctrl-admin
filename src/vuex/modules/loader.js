import request from 'superagent'
import uuidV1 from 'uuid/v1'

const actions = {
    loadCurrent({ commit, state }){
        request
            .post('/state')
            .set("Authorization", state.token)
            .end((err, res)=>{
                if (err || !res.body) {
                    console.log(err)
                    loadTestState(commit)
                } else {
                    console.log('response from server /state:', res.body)
                    commit('setCurrent', res.body)
                }
            })
    },
    loadEvents({ commit, state }, forWho ){
        console.log('attempting to load events', {forWho})
        request
            .post('/evdb')
            .set("Authorization", state.token)
            .send(forWho)
            .end((err, res)=>{
                if (err || !res.body) {
                    console.log(err)
                } else {
                    console.log('response from server /events:', res.body)
                    commit('setEvents', res.body)
                }
            })
    }
}

const state = {
    token: '',
    session: '',
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
    console.log('loading test state')
    let i = 0
    let c = []
    while (i < 10){
      i++
      let session = uuidV1()
      let memberId = uuidV1()

      /*
      commit('setAuth', {
          session,
          token: 'abcd'
      })
      */

      commit('applyEvent', {
        type: 'session-created',
        session,
        ownerId: memberId,
      })

      commit('applyEvent', {
        memberId,
        type: 'member-created',
        name: 'Test ' + i * (11 + i*i),
        balance: i - 5,
        address: '1Ross5Np5doy4ajF9iGXzgKaC2Q3Pwwxv',
        active: i,
        badges:['admin', 'doge', 'bullet', 'bitpepsi', 'secure']
      })

      commit('applyEvent', {
        resourceId: uuidV1(),
        name: 'bitpepsi',
        type: "resource-created",
        charged: 3,
        stock: 52,
        current: [{memberId}],
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
