import request from 'superagent'
import { dctrlMuts } from '../../mutations'

const state = {
    cash: 0,
    resources: 0,
    supplies: {
        bitpepsi: 0
    }
}

const mutations = {
    setCurrentDctrl(dctrl, current){
        dctrl.cash = current.cash
        dctrl.resources = current.resources
        dctrl.supplies = current.supplies
    },
    applyEvent: dctrlMuts
}

function loadTestState(commit){
    let i = 0
    while (i < 10){
      i++
      commit('applyEvent', {
        type: 'member-created',
        name: 'Test ' + i * (11 + i*i),
        balance: i - 5,
        active: i
      })
    }

    i = 0
    while (i < 10){
      i++
      commit('applyEvent', {
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


const actions = {
  loadCurrent({ commit }){
    console.log('trying to commit load current ')
      request.get('/state')
          .end((err, res)=>{
              if (err || !res.body) {
                  loadTestState(commit)
              } else {
                  console.log(err, res)
                  commit('setCurrentMembers', res.body.members)
                  commit('setCurrentResources', res.body.resources)
                  commit('setCurrentTasks', res.body.tasks)
                  commit('setCurrentDctrl', res.body.dctrl)
              }

          })
  }
}

module.exports = {
    state,
    mutations,
    actions
}
