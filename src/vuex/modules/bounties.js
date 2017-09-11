import request from 'superagent'
import { applyBounties } from '../../../adminSrc/mutations'

const state = []

const mutations = {
    setCurrentBounties(bounties, current){
        current.forEach( bounty => {
            bounties.push(bounty)
        })
    },
    applyEvent: applyBounties
}

const actions = {

}

module.exports = {
  state,
  mutations,
  actions
}
