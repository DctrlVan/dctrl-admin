const r = require('rethinkdb')
const config = require('./conf')


// todo time filter
var conn
function getEventsForAddress( address, callback ){
  console.log('IN getEventsForAddress')
  r
      .table('events')
      .filter({action: { address }})
      .run(conn, function(err, cursor) {
          console.log('Response for address: ')

          const listOfMemberPaidActions = []
          const listOfMemberChargedActions = []

          cursor.each( (err, ev)=>{
                console.log({ev})

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
            console.log({
                listOfMemberPaidActions,
                listOfMemberChargedActions,
            })
            callback(null, {
                listOfMemberPaidActions,
                listOfMemberChargedActions,
            })

          })
      })
}


module.exports = {
    getEventsForAddress
}


r.connect({
        db: 'eventstate',
        host: config.rethinkLocation
    }).then(c => {
        conn = c
    })
