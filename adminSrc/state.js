const dctrlDb = require('./dctrlDb')
const mutations = require('./mutations')

const state = {
  members: [],
  bounties: [],
  dctrl: {
    cash: 12,
    supplies: {
      bitpepsi: 110
    }
  },
}

function applyEvent(ev){
    mutations.applyBounties(state.bounties, ev)
    mutations.applyDctrl(state.dctrl, ev)
    mutations.applyMembers(state.members, ev)
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

setTimeout(()=>{
    initialize()
}, 4321) // wait for conn, TODO

module.exports = {
    getState
}
