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
                  member.proof = ev.proof
              }
          })
          break

      case "member-field-updated":
          console.log('trying to mutate field', ev)
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  console.log({member})
                  console.log( 'trying to change', ev.field, member[ev.field] )
                  member[ev.field] = ev.newfield
              }
          })
          break

      case "badge-added":
          members.forEach( member => {
              if (member.memberId === ev.memberId){
                  if (member.badges.indexOf(ev.badge) === -1){
                      member.badges.push( ev.badge )
                  }
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
