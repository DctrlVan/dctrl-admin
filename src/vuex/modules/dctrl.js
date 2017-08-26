import request from 'superagent'
import { applyDctrl } from '../../../adminSrc/mutations'

const state = {
    cash: 0,
    supplies: {
        bitpepsi: 0
    }
}

const mutations = {
    setCurrentDctrl(dctrl, current){
        dctrl.cash = current.cash
        dctrl.supplies = current.supplies
    },
    applyEvent: applyDctrl
}

const actions = {
  loadCurrent({ commit }){
      request.get('/state')
          .end((err, res)=>{
              console.log(res.body)
              commit('setCurrentMembers', res.body.members)
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
