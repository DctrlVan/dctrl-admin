import request from 'superagent'
import { resourcesMuts } from '../../../adminSrc/mutations'

const state = [] // aka resources (in this file):

const mutations = {
    setCurrentResources(resources, current){
        current.forEach( resource => {
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
