const r = require('rethinkdb')
const config = require('../configuration')
const dctrlDb = require('./dctrlDb')

// todo time filter
function getEventsForMember( memberId, callback ){
  let conn = dctrlDb.getConnection()
  if (!conn) return console.log('wait for connection')
  r
      .table('events')
      .filter({memberId})
      .run(conn, function(err, cursor) {
          const memberPaidEvents = []
          const memberChargedEvents = []

          cursor.each( (err, ev)=>{
                switch (ev.type) {
                    case 'supplies-used':
                    case 'member-charged':
                        memberChargedEvents.push(ev)
                        break
                    case 'member-paid':
                    case 'supplies-stocked':
                    case 'bounty-claimed':
                        memberPaidEvents.push(ev)
                        break
                }
          }, (err, results)=> { // on cursor end
            if (err) return callback(err);
            callback(null, {
                memberPaidEvents,
                memberChargedEvents,
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
          const bountyClaimedEvents = []

          cursor.each( (err, ev)=>{
                console.log('found bounty', {ev})
                var a = new Date(ev.timestamp*1000)
                ev.action.year = a.getFullYear();
                ev.action.month = a.getMonth()
                ev.action.day = a.getDate();

                switch (ev.action.type) {
                    case 'bounty-claimed':
                        bountyClaimedEvents.push(ev.action)
                        break
                }
          }, (err, results)=> { // on cursor end
            if (err) return callback(err);
            callback(null, {
                bountyClaimedEvents,
            })
          })
      })
}

function getEventsForResource( resourceId, callback ){
  let conn = dctrlDb.getConnection()
  if (!conn) return console.log('wait for connection')
  r
      .table('events')
      .filter({resourceId})
      .run(conn, function(err, cursor) {
          const resourceUsedEvents = []
          const resourceUpdatedEvents = []

          cursor.each( (err, ev)=>{
                switch (ev.type) {
                    case 'resource-updated':
                    case 'resource-used':
                        resourceUpdatedEvents.push(ev)
                        break
                    case 'resource-paid':                     //needs to be added
                        resourcePaidEvents.push(ev)
                        break
                }
          }, (err, results)=> { // on cursor end
            if (err) return callback(err);
            callback(null, {
                resourceUsedEvents,
                resourceUpdatedEvents,
            })

          })
      })
}

module.exports = {
    getEventsForBounty,
    getEventsForMember,
    getEventsForResource
}
