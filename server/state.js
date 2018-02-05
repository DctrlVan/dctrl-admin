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
    console.log('new state', state)
}

function initialize(callback) {
    dctrlDb.getAll((err, all) => {
        if (err) return callback(err)
        all.forEach(applyEvent)
        callback(null)
    })
}

module.exports = {
    state,
    initialize,
    applyEvent
}
