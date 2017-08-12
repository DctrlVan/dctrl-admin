const r = require('rethinkdb')
const config = require('./conf')


// todo time filter
  var conn
  function getEventsForAddress( bid, callback ){
    console.log('IN getEventsForAddress')
    r
        .table('events')
        .filter({action: { address: bid }})
        .run(conn, function(err, cursor) {
            console.log('Response for address: ')

            const listOfMemberPaidActions = []
            const listOfMemberChargedActions = []

            cursor.each( (err, ev)=>{
                  var a = new Date(ev.timestamp*1000)
                  ev.action.year = a.getFullYear();
                  ev.action.month = a.getMonth() + 1
                  ev.action.day = a.getDate();

                  switch (ev.action.type) {
                      case 'member-charged':
                          listOfMemberChargedActions.push(ev.action)
                          break
                      case 'member-paid':
                          listOfMemberPaidActions.push(ev.action)
                          break
                  }
            }, (err, results)=> {
              // on cursor end
              callback(null, {
                  listOfMemberPaidActions,
                  listOfMemberChargedActions,
              })

            })
        })
  }

  function getEventsForBounty( bountyId, callback ){
    r
        .table('events')
        .filter({action: { "bounty-id": bountyId }})
        .run(conn, function(err, cursor) {

            const listOfBountyPaidActions = []

            cursor.each( (err, ev)=>{
                  console.log('found bounty', {ev})
                  var a = new Date(ev.timestamp*1000)
                  ev.action.year = a.getFullYear();
                  ev.action.month = a.getMonth() + 1
                  ev.action.day = a.getDate();

                  switch (ev.action.type) {
                      case 'bounty-claimed':
                          listOfBountyPaidActions.push(ev.action)
                          break
                  }
            }, (err, results)=> {
              // on cursor end
              console.log('Response for bountyId: ', {bountyId, listOfBountyPaidActions})
              callback(null, {
                  listOfBountyPaidActions,
              })

            })
        })
  }

  module.exports = {
      getEventsForBounty,getEventsForAddress
  }

  r.connect({
          db: 'eventstate',
          host: config.rethinkLocation
      }).then(c => {
          conn = c
      })
