import request from 'superagent'
import { applyResources } from '../../../adminSrc/mutations'

const state = [] // aka resources (in this file):

const mutations = {
    setCurrentResources(resources, current){
        current.forEach( resource => {
            resources.push(resource)
        })
    },
    applyEvent: applyResources
}

const actions = {}

module.exports = {
  state,
  mutations,
  actions
}
