const r = require('rethinkdb')


const listOfMemberPaidActions = []
const listOfMemberChargedActions = []

// todo time filter
var conn
function getEventsForAddress( address, callback ){
  r
      .table('events')
      .filter({action: { address }})
      // .group( r.row('action')['type'] )
      // can this work?
      .run(conn, function(err, cursor) {
          console.log('address filter on')

          cursor.each( (err, ev)=>{
                switch (ev.action.type) {
                    case 'member-charged':
                        listOfMemberChargedActions.push(ev.action)
                        break
                    case 'member-paid':
                        listOfMemberPaidActions.push(ev.action)
                        break
                }
          }, (err, results)=> {
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
        host: '192.168.0.109'
    }).then(c => {
        conn = c
    })
