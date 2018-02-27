import _ from 'lodash'

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

      case "resource-stocked":
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  member.balance += parseFloat(ev.paid)
              }
          })
          break

      case "resource-used":
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

      case "member-address-updated":
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  member.address = ev.address
              }
          })
          break

      case "member-secret-updated":
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  member.secret = ev.secret
              }
          })
          break

      case "badge-added":
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  member.badges.push( ev.badge )
              }
          })
          break

      case "badge-removed":
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  _.remove(member.badges, n => n === ev.badge)
              }
          })
          break
  }
}
