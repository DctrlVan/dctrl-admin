import request from 'superagent'
import { applyBounties } from '../../../adminSrc/mutations'

const state = [] // aka members (in this file):


const mutations = {
    setCurrentBounties(bounties, current){
        current.forEach( member => {
            bounties.push(member)
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
