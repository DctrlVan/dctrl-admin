import _ from 'lodash'

const mutations = {
  setHeader(director, heading){
    //TODO: this is ugly, maybe header shouldn't be static
    director.headingContent = [heading]
  }
}

const state = {
    headingContent: ['Welcome to DCTRL'],
}

const actions = {
}


export default {
  state,
  mutations,
  actions,
}
