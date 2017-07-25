const r = require('rethinkdb')



// todo time filter
var conn
function getEventsForAddress( address, callback ){
  r
      .table('events')
      .filter({action: { address }})
      .run(conn, function(err, cursor) {
          console.log('Response for address: ')

          const listOfMemberPaidActions = []
          const listOfMemberChargedActions = []
          cursor.each( (err, ev)=>{
                switch (ev.action.type) {
                    case 'member-charged':
                        console.log('adding')
                        listOfMemberChargedActions.push(ev.action)
                        break
                    case 'member-paid':
                        console.log('adding')
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
        host: '192.168.0.127'
    }).then(c => {
        conn = c
    })
