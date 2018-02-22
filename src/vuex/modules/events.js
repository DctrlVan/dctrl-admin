import request from 'superagent'

const state = {
    events: [],
}

function applyEvent(state, ev){
    state.events.push(ev)
}

function setEvents(state, evList){
    state.events = evList
}

const mutations = {
    applyEvent,
    setEvents,
}

const actions = {

}

module.exports = {
    state,
    mutations,
    actions
}
