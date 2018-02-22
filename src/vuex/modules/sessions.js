import request from 'superagent'
import { sessionsMuts } from '../../mutations'

const state = [] // aka resources (in this file):

const mutations = {
    setCurrent(sessions, current){
        sessions.length = 0
        current.sessions.forEach( session => {
            sessions.push(session)
        })
    },
    applyEvent: sessionsMuts
}

const actions = {}

module.exports = {
  state,
  mutations,
  actions
}
