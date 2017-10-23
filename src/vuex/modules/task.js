import request from 'superagent'

const state = {
    taskId: null,
    taskClaimedEvents: []
}

function applyEvent(state, ev){
    switch (ev.type){
        case 'task-claimed':
            console.log('actually pushing onto object')
            state.taskClaimedEvents.push(ev)
            break
    }
}

const mutations = {
    applyEvent,
    applyTaskEvent: applyEvent,
    setTaskIdandReset(state, taskId){
        state.taskId = taskId
        state.taskClaimedEvents = []
    },
}

var activeTask
const actions = {
    getTaskHistory({ commit }, taskId){
        console.log('get member history')
        // we need a guard here because the mounted function in Task
        // was getting called twice. TODO: better solution
        if (activeTask === taskId) {
            return console.log('preventing double call')
        } else {
          activeTask = taskId
        }
        commit('setTaskIdandReset', taskId)
        request
            .get('/db/task/' + taskId)
            .end((err, res)=> {
                if (err || !res.body) {
                    return console.log('no res')
                }
                console.log('res body', res.body)
                res.body.forEach( ev => {
                    console.log('applying event?' , {ev})
                    commit('applyTaskEvent', ev)
                })
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
