const dctrlDb = require('./dctrlDb')
const mutations = require('../src/mutations')

const state = {
  connections: [],
  members: [],
  tasks: [],
  sessions: [],
  resources: []
}

function applyEvent(ev) {
    mutations.connectionsMuts(state.connections, ev)
    mutations.membersMuts(state.members, ev)
    mutations.tasksMuts(state.tasks, ev)
    mutations.sessionsMuts(state.sessions, ev)
    mutations.resourcesMuts(state.resources, ev)
}

function initialize() {
    dctrlDb.getAll((err, all) => {
        if (err) return console.log({err})
        console.log('initializing')
        all.forEach(applyEvent)
        dctrlDb.changeFeed.onValue(applyEvent)
    })
}

module.exports = {
    state,
    initialize,
}
