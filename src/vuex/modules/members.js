import request from 'superagent'
import { membersMuts } from '../../../adminSrc/mutations'

const state = [] // aka members (in this file):

const mutations = {
    setCurrentMembers(members, current){
        current.forEach( member => {
            members.push(member)
        })
    },
    applyEvent: membersMuts
}

const actions = {}

module.exports = {
  state,
  mutations,
  actions
}
