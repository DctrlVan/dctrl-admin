const r = require('rethinkdb')
const Kefir = require('kefir')
const config = require('../configuration')

var conn, eventEmitter
const changeFeed = Kefir.stream( e => {
    eventEmitter = e
}).log('dbfeed')

// Uncomment to initialize rethink db & table
// setTimeout(()=>{
//   initializeRethink()
// }, 5555)
function initializeRethink(){
  if (!conn) return console.log("wait for connection")
  r.dbCreate('dctrl').run(conn, (err, result)=>{
      r.db('dctrl').tableCreate('events').run(conn, (err, result2)=>{
          console.log({result, result2})
      })
  })
}

function getAll(callback){
  if (!conn) return console.log("wait for connection")
  r
      .table('events')
      .orderBy('timestamp') //todo index
      .run(conn, (err, cursor)=> {
          if (err) return console.log('err getting feed', err)
          let all = []
          cursor.each((err, ev)=>{
              if (err) return console.log('err getting event', err)
              all.push(ev)
          }, (err, res)=>{
            callback(null, all)
          })
      })
}


function startFeed(){
    console.log("starting feed...")
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

function insertEvent(ev, callback){
    if (!conn) return callback("No rethinkdb connection")
    if (!ev.timestamp){ 
        ev.timestamp = Date.now()
    }
    r
        .db("dctrl")
        .table("events")
        .insert(ev)
        .run(conn, callback)
}

r
    .connect({
        db: 'dctrl',
        host: config.rethinkLocation
    }).then(rethinkDbConnection => {
        console.log("db connected")
        conn = rethinkDbConnection
        startFeed()
    })

function getConnection(){
    return conn
}

module.exports = {
  getConnection,
  getAll,
  changeFeed,
  insertEvent
}
