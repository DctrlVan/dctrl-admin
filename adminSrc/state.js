const dctrlDb = require('./dctrlDb')
const mutations = require('./mutations')

const state = {
  members: [],
  resources: [],
  bounties: [],
  dctrl: {
    cash: 12,
    supplies: {
      bitpepsi: 110
    }
  },
}

function applyEvent(ev){
    mutations.bountiesMuts(state.bounties, ev)
    mutations.dctrlMuts(state.dctrl, ev)
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
