const r = require('rethinkdb')
const config = require('../conf')
const Kefir = require('kefir')

// todo time filter
var conn
r.connect({
      db: 'eventstate',
      host: config.rethinkLocation
}).then(rethinkDbConnection => {
      conn = rethinkDbConnection
})

function startFeed(){
    r
        .table('events')
        // .filter({
        //     type: "member-charged",
        //     notes: "bitpepsi"
        // })
        .run(conn, (err, cursor)=> {
          cursor.each((err, ev)=>{
            console.log({err,ev})
          })
        })
}

module.exports = {
    getEventsForBounty,getEventsForMember
}
