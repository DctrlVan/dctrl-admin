import request from 'superagent'

const state = [] // aka members (in this file):

const mutations = {
    setCurrentBounties(bounties, current){
        current.forEach( member => {
            bounties.push(member)
        })
    },
    applyEvent(bounties, ev){
        switch (ev.type){
            case "bounty-created":
                delete ev.type
                bounties.push(ev)
                break
            case "bounty-claimed":
                bounties.forEach( bounty => {
                    if (bounty.bountyId === ev.bountyId){
                        bounty.lastClaimed = Date.now()
                        bounty.boost = 0
                    }
                })
                break
            case "bounty-update-value":
                bounties.forEach( bounty => {
                    if (bounty.bountyId === ev.bountyId){
                        bounty.value = ev.amount
                    }
                })
                break
            case "bounty-boosted":
                bounties.forEach( bounty => {
                    if (bounty.bountyId === ev.bountyId){
                        bounty.boost = ev.boost
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
