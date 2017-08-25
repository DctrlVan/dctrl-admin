import request from 'superagent'

const state = [] // aka members (in this file):

const mutations = {
    setCurrent(members, current){
        current.forEach( member => {
            members.push(member)
        })
    },
    applyEvent(members, ev){
        switch (ev.type){
            case "member-created":
                delete ev.type
                members.push(ev)
                break
            case "member-activated":
            case "member-deactivated":
            case "member-charged":
            case "member-paid":
            case "member-update-address":
        }
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
