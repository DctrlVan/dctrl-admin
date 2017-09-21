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

const actions = {
  loadCurrent({ commit }){
      request.get('/state')
          .end((err, res)=>{
              console.log("res to state?", res.body)
              commit('setCurrentMembers', res.body.members)
              commit('setCurrentResources', res.body.resources)
              commit('setCurrentBounties', res.body.bounties)
              commit('setCurrentDctrl', res.body.dctrl)
          })
  }
}

module.exports = {
    state,
    mutations,
    actions
}
