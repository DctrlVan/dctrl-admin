const config = require('../conf')
const request = require('superagent')
const bitcoindZmq = require('./bitcoindZmq')
const bitcoindRpc = require('./bitcoindRpc')
const exchangeRate = require('./exchangeRate')

const currentAccounts = require('./currentAccounts')

// check on new blocks
bitcoindZmq.hashblockStream.onValue( checkForPayments )

function checkForPayments(){
    console.log("CHECKING FOR PAYMENTS.")
    currentAccounts.forEach( watchedAddress => {
        bitcoindRpc.getBalance(watchedAddress.address, (err, balance)=> {
            if (err) return console.log('getbalance err:', {err})

            if (watchedAddress.balance !== balance){
                let amount = parseFloat(balance) - parseFloat(watchedAddress.balance)
                watchedAddress.balance = balance
                recordPayment(amount, watchedAddress.address)
            } else {
                console.log('no payment received', watchedAddress)
            }
        })
    })
}

function recordPayment(amount, address){
    console.log("TODO: recordPayment:", {amount, address})
    getMemberIdFromAddress(address, (err, memberId)=>{
        exchangeRate.getCadPrice( (err, exchangeRate)=> {
            let amount = (exchangeRate * amount).toFixed(6).toString()
            console.log("Now creating member paid event: ", {amount, memberId})
            request
                .post(config.brainLocation + 'members')
                .send({
                    action: {
                        type: "member-paid",
                        "member-id": memberId,
                        amount,
                        "cash?": false,
                        notes: "bitcoind" // TODO: txid here, prevent double count?
                    }
                })
                .end((err, res)=> {
                    console.log({err,body:res.body})
                })
        })
    })
}

function getMemberIdFromAddress(address, callback){
    request
        .get(config.brainLocation + 'members')
        .end( (err, res)=> {
            if (err) return callback(err)
            let id = null
            res.body.forEach( member => {
                if (member.address == address){
                    id = member["member-id"]
                }
            })
            callback(null, id)
        })
}

function removeWatch(){
    // TODO: _.pullAllWith(array, values, [comparator]) ??
}
