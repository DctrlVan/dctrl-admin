const r = require('rethinkdb')
const config = require('../conf')
const dctrlDb = require('./dctrlDb')

// todo time filter
function getEventsForMember( memberId, callback ){
  console.log(dctrlDb)
  let conn = dctrlDb.getConnection()
  if (!conn) return console.log('wait for connection')
  r
      .table('events')
      .filter({memberId})
      .run(conn, function(err, cursor) {
          console.log('Response for address: ')

          const listOfMemberPaidActions = []
          const listOfMemberChargedActions = []

          cursor.each( (err, ev)=>{
                console.log(memberId, ev)
                // used for calendar, add to action
                var a = new Date(ev.timestamp)
                ev.year = a.getFullYear()
                ev.month = a.getMonth()
                ev.day = a.getDate()

                switch (ev.type) {
                    case 'member-charged':
                        listOfMemberChargedActions.push(ev)
                        break
                    case 'member-paid':
                        listOfMemberPaidActions.push(ev)
                        break
                }
          }, (err, results)=> {
            // on cursor end
            if (err) return callback(err);
            callback(null, {
                listOfMemberPaidActions,
                listOfMemberChargedActions,
            })

          })
      })
}

function getEventsForBounty( bountyId, callback ){
  if (!conn) return console.log('wait for connection')
  r
      .table('events')
      .filter({bountyId})
      .run(conn, function(err, cursor) {

          const listOfBountyPaidActions = []

          cursor.each( (err, ev)=>{
                console.log('found bounty', {ev})
                var a = new Date(ev.timestamp*1000)
                ev.action.year = a.getFullYear();
                ev.action.month = a.getMonth()
                ev.action.day = a.getDate();

                switch (ev.action.type) {
                    case 'bounty-claimed':
                        listOfBountyPaidActions.push(ev.action)
                        break
                }
          }, (err, results)=> {
            // on cursor end
            if (err) return callback(err);
            callback(null, {
                listOfBountyPaidActions,
            })

          })
      })
}

module.exports = {
    getEventsForBounty,getEventsForMember
}
