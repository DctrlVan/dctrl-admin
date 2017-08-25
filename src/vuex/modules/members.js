import request from 'superagent'

const state = [] // aka members (in this file):

const mutations = {
    setCurrentMembers(members, current){
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
                members.forEach( member => {
                    if (member.memberId === ev.memberId){
                        member.active ++
                    }
                })
                break
            case "member-deactivated":
                members.forEach( member => {
                    if (member.memberId === ev.memberId){
                        member.active = -1 * member.active
                    }
                })
                break
            case "member-charged":
                members.forEach( member => {
                    if (member.memberId === ev.memberId){
                        member.balance = member.balance - ev.amount
                    }
                })
                break
            case "member-paid":
                members.forEach( member => {
                    if (member.memberId === ev.memberId){
                        member.balance = member.balance - ev.amount
                    }
                })
                break
            case "member-update-address":
                members.forEach( member => {
                    if (member.memberId === ev.memberId){
                        member.address = ev.newAddress
                    }
                })
                break
        }
    }
}

const actions = {

}

module.exports = {
  state,
  mutations,
  actions
}
