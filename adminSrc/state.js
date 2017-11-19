const dctrlDb = require('./dctrlDb')
const mutations = require('../src/mutations')

const state = {
  members: [],
  resources: [],
  tasks: [],
  dctrl: {
    cash: 12
  },
}

function applyEvent(ev){
    mutations.dctrlMuts(state.dctrl, ev)
    mutations.tasksMuts(state.tasks, ev)
    mutations.membersMuts(state.members, ev)
    mutations.resourcesMuts(state.resources, ev)
}

function initialize() {
    dctrlDb.getAll((err, all) => {
        all.forEach(applyEvent)
        dctrlDb.changeFeed.onValue(applyEvent)
    })
}

function getState() {
    return state
}

function getCleanState() {
    return state
}

setTimeout(()=>{
    initialize()
}, 4321) // wait for conn, TODO

module.exports = {
    getState
}
