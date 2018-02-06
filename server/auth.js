const utils = require('./spec/utils')
const events = require('./events')
const cryptoUtils = require('../src/crypto')
const state = require('./state')

const getSecret = function(id){

  return '1234'
}

const getIdSecret = function(name){
    console.log('getIdSecret', {name})
    let ownerId, secret
    state.serverState.members.forEach( member => {
        if (member.name === name){
            ownerId = member.memberId
            secret = member.secret
        }
    })
    console.log('getId', {ownerId, secret})
    return {ownerId, secret}
}

function socketAuth(socket, data, callback){
    let authorized
    state.serverState.sessions.forEach(session => {
        if (session.token === data.token){
            authorized = true
        }
    })
    console.log('socket auth', {authorized})
    callback(null, authorized)
}

// express middleware auth
function serverAuth(req, res, next){
    // a session is a random uuid created client side
    // if these headers are present {session, authorization, id} the client is attempting to create a new session
    const {ownerId, secret} = getIdSecret(req.headers.name)
    if (secret && req.headers.authorization && req.headers.session){
        let sessionKey = cryptoUtils.createHash(req.headers.session + secret)
        let token = cryptoUtils.hmacHex(req.headers.session, sessionKey)
        if (token === req.headers.authorization){
            // client able to create the token, must have secret
            events.sessionCreated(ownerId, req.headers.session, token, utils.buildResCallback(res))
        }
    } else {
        let authorized = false
        state.serverState.sessions.forEach(session => {
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

module.exports = {
    socketAuth,
    serverAuth
}
