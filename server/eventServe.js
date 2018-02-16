import express from 'express'
import r from 'rethinkdb'

import state from './state'
import dctrlDb from './dctrlDb'

const router = express.Router()

router.use('/events', (req, res, next) => {
    console.log('inside the event serving middleware', req.body, dctrlDb)
    r
        .table('events')
        .orderBy('timestamp') //todo index
        .filter(req.body)
        .run(dctrlDb.getConn(), (err, cursor) => {
            if (err) return console.log('err getting feed', err)
            let all = []
            cursor.each((err, ev) => {
              if (err) return console.log('err getting event', err)
              all.push( state.removeSensitive(ev) )
            }, (err) => {
                res.send(all)
            })
        })
})

module.exports = router
