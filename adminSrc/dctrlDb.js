const r = require('rethinkdb')
const Kefir = require('kefir')
const config = require('../conf')

var conn, eventEmitter
const changeFeed = Kefir.stream( e => {
    eventEmitter = e
}).log('dbfeed')

function startFeed(){
    r
        .table('events')
        .changes()
        .run(conn, (err, cursor)=> {
            if (err) return console.log('err getting feed', err)
            cursor.each((err, ev)=>{
                if (err) return console.log('err getting event', err)
                eventEmitter.emit(ev.new_val)
            })
        })
}

r
    .connect({
        db: 'eventstate',
        host: config.rethinkLocation
    }).then(rethinkDbConnection => {
        console.log("db connected")
        conn = rethinkDbConnection
        startFeed()
    })

function insertEvent( ev, callback ){
    if (!conn) return console.log("wait for connection")
    ev.timestamp = Date.now()
    r
        .db("eventstate").table("events")
        .insert(ev)
        .run(conn, callback)
}

module.exports = {
  conn,
  changeFeed,
  insertEvent
}
