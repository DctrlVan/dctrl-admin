import _ from 'lodash'
import dctrlDb from './dctrlDb'
import mutations from '../src/mutations'

const serverState = {
  connections: [],
  invoices: [],
  sessions: [],
  members: [],
  tasks: [],
  resources: [],
  cash: { cash: 0 }
}

const pubState = {
  invoices: [],
  connections: [],
  sessions: [],
  members: [],
  tasks: [],
  resources: [],
  cash: { cash: 0 }
}


function applyEvent(state, ev) {
    mutations.connectionsMuts(state.connections, ev)
    mutations.membersMuts(state.members, ev)
    mutations.tasksMuts(state.tasks, ev)
    mutations.sessionsMuts(state.sessions, ev)
    mutations.resourcesMuts(state.resources, ev)
    mutations.invoicesMuts(state.invoices, ev)
}

function initialize(callback) {
    dctrlDb.getAll((err, all) => {
        if (err) return callback(err)
        all.forEach( ev => {
            applyEvent(serverState, ev)
            applyEvent(pubState, removeSensitive(ev))
        })
        callback(null)
    })
}

function removeSensitive(ev){
      return _.omit(ev, ['fob', 'secret', 'token', 'email'])
}

module.exports = {
    serverState,
    pubState,
    initialize,
    applyEvent,
    removeSensitive,
}
