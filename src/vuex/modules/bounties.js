import request from 'superagent'
import { bountiesMuts } from '../../../adminSrc/mutations'

const state = []

const mutations = {
    setCurrentBounties(bounties, current){
        current.forEach( bounty => {
            bounties.push(bounty)
        })
    },
    applyEvent: bountiesMuts
}

const actions = {

}

module.exports = {
  state,
  mutations,
  actions
}
