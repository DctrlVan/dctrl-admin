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
      .run(conn, (err, cursor)=>{
        if (err) return callback(err);
        cursor.toArray(callback)
      })
}

function getEventsForTask( taskId, callback ){
  let conn = dctrlDb.getConnection()
  if (!conn) return console.log('wait for connection')
  r
      .table('events')
      .filter({taskId})
      .run(conn, (err, cursor)=>{
        if (err) return callback(err);
        cursor.toArray(callback)
      })
}

function getEventsForResource( resourceId, callback ){
  let conn = dctrlDb.getConnection()
  if (!conn) return console.log('wait for connection')
  r
      .table('events')
      .filter({resourceId})
      .run(conn, (err, cursor)=>{
        if (err) return callback(err);
        cursor.toArray(callback)
      })
}

module.exports = {
    getEventsForTask,
    getEventsForMember,
    getEventsForResource
}
