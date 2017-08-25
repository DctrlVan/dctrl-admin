import request from 'superagent'

const state = []

const mutations = {
    setCurrent(state, current){
        current.forEach( member => {
            state.push(member)
        })
    },
    applyEvent(state, ev){
        // switch?
    }
}

const actions = {
    getMembers({ commit }){
        request.get('/state')
            .end((err, res)=>{
                console.log(res.body)
                commit('setCurrent', res.body.members)
            })
    }
}

module.exports = {
  state,
  mutations,
  actions
}
