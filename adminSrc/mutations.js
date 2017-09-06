
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

function applyBounties(bounties, ev) {
  switch (ev.type) {
    case "bounty-created":
      var clonedEv = Object.assign({}, ev);
      delete clonedEv.type
      bounties.push(clonedEv)
      break
    case "bounty-claimed":
      bounties.forEach(bounty => {
        if (bounty.bountyId === ev.bountyId) {
          bounty.lastClaimed = Date.now()
          bounty.boost = 0
        }
      })
      break
    case "bounty-update-value":
      bounties.forEach(bounty => {
        if (bounty.bountyId === ev.bountyId) {
          bounty.value = ev.amount
        }
      })
      break
    case "bounty-boosted":
      bounties.forEach(bounty => {
        if (bounty.bountyId === ev.bountyId) {
          bounty.boost = ev.boost
        }
      })
      break
  }
}

module.exports = {
  applyDctrl,
  applyMembers,
  applyBounties,
}
