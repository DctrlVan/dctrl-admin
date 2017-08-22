const request = require('superagent')
const config = require('../conf')
const bitcoindRpc = require('./bitcoindRpc')
const addressManager = require('./addressManager')

const currentAccounts = []

function initializeWatchedAddresses(){
    request
        .get(config.brainLocation + 'members')
        .end((err, res)=> {
            if (err || res.body.err){
                return console.log('unable to get members, braindead')
            }

            res.body.forEach( member => {
                if (member.address){
                    checkInitial(member.address)
                } else {
                    addressManager.getNewAddress( (err, success)=> {
                        console.log({err,success})
                    })
                }
            })
        })
}

function checkInitial(address){
    if (!address) return console.log('address required')
    bitcoindRpc.getBalance(address, (err, balance)=> {
        if (err) return console.log('getbalance err:', err);
        currentAccounts.push({
            address,
            balance
        })
        console.log("Initialized:", {currentAccounts})
    })
}

module.exports = currentAccounts
