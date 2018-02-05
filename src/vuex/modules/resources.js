import request from 'superagent'
import { resourcesMuts } from '../../mutations'

const state = [] // aka resources (in this file):

const mutations = {
    setCurrent(resources, current){
        resources.length = 0
        current.resources.forEach( resource => {
            resources.push(resource)
        })
    },
    applyEvent: resourcesMuts
}

const actions = {}

module.exports = {
  state,
  mutations,
  actions
}
