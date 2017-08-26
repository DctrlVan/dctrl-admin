const r = require('rethinkdb')
const config = require('../conf')
const dctrlDb = require('./dctrlDb')

// todo time filter
function getEventsForMember( memberId, callback ){
  let conn = dctrlDb.getConnection()
  if (!conn) return console.log('wait for connection')
  r
      .table('events')
      .filter({memberId})
      .run(conn, function(err, cursor) {
          const listOfMemberPaidEvents = []
          const listOfMemberChargedEvents = []

          cursor.each( (err, ev)=>{
                switch (ev.type) {
                    case 'member-charged':
                        listOfMemberChargedEvents.push(ev)
                        break
                    case 'member-paid':
                        listOfMemberPaidEvents.push(ev)
                        break
                }
          }, (err, results)=> { // on cursor end
            if (err) return callback(err);
            callback(null, {
                listOfMemberPaidEvents,
                listOfMemberChargedEvents,
            })

          })
      })
}

function getEventsForBounty( bountyId, callback ){
  let conn = dctrlDb.getConnection()
  if (!conn) return console.log('wait for connection')
  r
      .table('events')
      .filter({bountyId})
      .run(conn, function(err, cursor) {
          const listOfBountyClaimedEvents = []

          cursor.each( (err, ev)=>{
                console.log('found bounty', {ev})
                var a = new Date(ev.timestamp*1000)
                ev.action.year = a.getFullYear();
                ev.action.month = a.getMonth()
                ev.action.day = a.getDate();

                switch (ev.action.type) {
                    case 'bounty-claimed':
                        listOfBountyClaimedEvents.push(ev.action)
                        break
                }
          }, (err, results)=> { // on cursor end
            if (err) return callback(err);
            callback(null, {
                listOfBountyClaimedEvents,
            })
          })
      })
}

module.exports = {
    getEventsForBounty,
    getEventsForMember
}
