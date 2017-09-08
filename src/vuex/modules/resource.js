import request from 'superagent'

const state = {
    resourceId: null,
    resourceUsedEvents: [{
    }],
    resourceUpdateEvents: [{
      // type: 'resource-updated',
      // amount: 9001
    }]
}

const mutations = {
    setUsed(state, used){
        console.log({used})
        state.resourceUsedEvents = used
    },
    setUpdated(state, updated){
        console.log({updated})
        state.resourceUpdatedEvents = updated
    },
    setId(state, resourceId){
        state.resourceId = resourceId
    },
    applyEvent(state, ev){
        switch(ev.type){
            case 'resource-used':
                if (ev.resourceId == state.resourceId){
                    state.resourceUsedEvents.push(ev)
                }
                break
            case 'resource-updated':
                if (ev.resourceId == state.resourceId){
                    state.resourceUpdatedEvents.push(ev)
                }
                break
        }
    }
}

const actions = {
    getResourceHistory({ state, commit }, resourceId){
        console.log("dispatching getHistory", {state, resourceId})
        let reqLoc = '/db/resource/' + resourceId
        commit('setId', resourceId)
        commit('setUsed', [])
        commit('setUpdated',[])
        request
            .get(reqLoc)
            .end((err, res)=> {
                if (err || !res.body) {
                    return console.log('no res')
                }
                commit('setUsed', res.body.resourceUsedEvents)
                commit('setUpdated', res.body.resourceUpdatedEvents)
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
