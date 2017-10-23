module.exports = (members, ev)=> {
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

      case "task-claimed":
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  member.balance += parseFloat(ev.paid)
              }
          })
          break
  }
}
