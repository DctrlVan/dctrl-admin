const utils = require('./spec/utils')
const events = require('./events')
const cryptoUtils = require('../src/crypto')
const state = require('./state')

const sessions = []

const getSecret = function(id){
  console.log('todo', id)
  return '1234'
} // TODO

// const getSessions =

module.exports = function auth(req, res, next){
    // a session is a random uuid created client side
    // if these headers are present {session, authorization, id} the client is attempting to create a new session
    let secret = getSecret(req.headers.id)
    if (secret && req.headers.authorization && req.headers.session){
        let sessionKey = cryptoUtils.createHash(req.headers.session + req.headers.id + secret)
        let token = cryptoUtils.hmacHex(req.headers.session, sessionKey)
        if (token === req.headers.authorization){
            // client able to create the token, must have secret
            events.sessionCreated(req.headers.id, req.headers.session, token, utils.buildResCallback(res))
        }
    } else {
        let authorized = false
        state.state.sessions.forEach(session => {
            console.log(session)
            if (session.token === req.headers.authorization){
                authorized = true
            }
        })
        if (authorized){
            console.log('authorized!')
            next()
        } else {
            console.log('unauthorized')
            res.status(401).end('unauthorized')
        }
    }
}
