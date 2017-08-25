import request from 'superagent'

const state = {
    cash: 0,
    supplies: {
        bitpepsi: 0
    }
}

const mutations = {
    setCurrentDctrl(dctrl, current){
        dctrl.cash = current.cash
        dctrl.supplies = current.supplies
    },
    applyEvent(dctrl, ev){
        switch(ev.type){
            case "member-paid":
                if (ev.isCash){
                    dctrl.cash += parseFloat(ev.amount)
                }
                break
            case "cash-increase":
                dctrl.cash += parseFloat(ev.amount)
                break
            case "cash-decrease":
                dctrl.cash -= parseFloat(ev.amount)
                break
            case "supplies-stocked":
                dctrl.supplies[ev.supplyType] += parseFloat(ev.amount)
                break
            case "supplies-used":
                dctrl.supplies[ev.supplyType] -=  parseFloat(ev.amount)
                break
        }
    }
}

const actions = {
  loadCurrent({ commit }){
      request.get('/state')
          .end((err, res)=>{
              console.log(res.body)
              commit('setCurrentMembers', res.body.members)
              commit('setCurrentBounties', res.body.bounties)
              commit('setCurrentDctrl', res.body.dctrl)
          })
  }
}

module.exports = {
    state,
    mutations,
    actions
}
