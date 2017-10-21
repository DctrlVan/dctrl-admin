import request from 'superagent'
import { dctrlMuts } from '../../../adminSrc/mutations'

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
        name: 'test',
        balance: i - 5,
        active: i
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
                  commit('setCurrentBounties', res.body.bounties)
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
