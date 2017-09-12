const _ = require('lodash')


function applyDctrl(dctrl, ev) {
  switch (ev.type) {
    case "member-paid":
      if (ev.isCash) {
        dctrl.cash += parseFloat(ev.paid)
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
      dctrl.supplies[ev.supplyType] -= parseFloat(ev.amount)
      break
  }
}

function applyMembers(members, ev) {
  switch (ev.type){
      case "member-created":
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
                  member.balance -= parseFloat(ev.charged)
              }
          })
          break
      case "member-paid":
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  member.balance += parseFloat(ev.paid)
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
      case "supplies-stocked":
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  member.balance += parseFloat(ev.paid)
              }
          })
          break
      case "supplies-used":
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  member.balance -= parseFloat(ev.charged)
              }
          })
          break

      case "bounty-claimed":
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  member.balance += parseFloat(ev.paid)
              }
          })
          break
  }
}

function applyResources(resources, ev) {
  switch (ev.type){
      case "resource-created":
          resources.push(ev)
          break
      // case "resource-activated":
      //     resources.forEach( resource => {
      //         if (resource.resourceId === ev.resourceId){
      //             resource.active ++
      //         }
      //     })
      //     break
      // case "resource-updated":
      //     resources.forEach( resource => {
      //         if (resource.resourceId === ev.resourceId){
      //             resource.balance -= parseFloat(ev.updated)
      //         }
      //     })
      //     break
      // case "resource-used":
      //     resources.forEach( resource => {
      //         if (resource.resourceId === ev.resourceId){
      //             resource.balance += parseFloat(ev.used)
      //         }
      //     })
      //     break
  }
}

function applyBounties(bounties, ev) {
  switch (ev.type) {
    case "bounty-created":
      bounties.push(ev)
      break
    case "bounty-claimed":
      bounties.forEach(bounty => {
        if (bounty.bountyId === ev.bountyId) {
          if (bounty.oneTime){
            _.remove(bounties, function(bounty) {
                return (bounty.bountyId === ev.bountyId)
            })
          } else {
            bounty.lastClaimed = Date.now()
            bounty.boost = 0
          }
        }
      })
      break
    case "bounty-monthly-updated":
      bounties.forEach(bounty => {
        if (bounty.bountyId === ev.bountyId) {
          bounty.monthlyValue = parseFloat(ev.amount)
        }
      })
      break
    case "bounty-boosted":
      bounties.forEach(bounty => {
        if (bounty.bountyId === ev.bountyId) {
          bounty.boost = parseFloat(ev.amount)
        }
      })
      break
  }
}

module.exports = {
  applyDctrl,
  applyMembers,
  applyResources,
  applyBounties,
}
