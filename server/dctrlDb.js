const r = require('rethinkdb')
const Kefir = require('kefir')
const config = require('../configuration')
const _ = require('lodash')

var conn, eventEmitter

const changeFeed = Kefir.stream(e => {
  eventEmitter = e
}).log('dbfeed')


function initializeRethink() {
  if (!conn) return console.log("wait for connection")
  return r.dbCreate('dctrl').run(conn, (err, result) => {
    r.db('dctrl').tableCreate('events').run(conn, (err, result2) => {
      startFeed()
    })
  })
}

function getAll(callback) {
    if (!conn) return console.log("wait for connection")
    r
        .table('events')
        .orderBy('timestamp') //todo index
        .run(conn, (err, cursor) => {
            if (err) return console.log('err getting feed', err)
            let all = []
            cursor.each((err, ev) => {
              if (err) return console.log('err getting event', err)
              all.push(ev)
            }, (err, res) => {
              callback(null, all)
            })
        })
}

function startFeed() {
  console.log("starting feed...")
  r
    .table('events')
    .changes()
    .run(conn, (err, cursor) => {
      if (err) return console.log('err getting feed', err)
      cursor.each((err, ev) => {
        if (err) return console.log('err getting event', err)
        eventEmitter.emit(ev.new_val)
      })
    })
}

function insertEvent(ev, callback) {
  if (!conn) return callback("No rethinkdb connection")
  if (!ev.timestamp) {
    ev.timestamp = Date.now()
  }
  r
    .db("dctrl")
    .table("events")
    .insert(ev)
    .run(conn, callback)
}

function startDb(callback){
  r.connect(config.rethink).then(rethinkDbConnection => {
    conn = rethinkDbConnection // conn is global to this file
    console.log("db connected")
    r.dbList().run(conn, (err, list) => {
      if (_.includes(list, 'dctrl')) { // TODO check for table too
        startFeed()
      } else {
        initializeRethink()
      }
      callback(null, conn)
    })
  })
}

function getConn(){
    return conn
}

module.exports = {
  conn:conn,
  startDb,
  getAll,
  changeFeed,
  insertEvent,
  getConn
}
