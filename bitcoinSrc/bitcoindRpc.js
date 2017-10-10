const bitcoind = require('bitcoin')
const config = require('../configuration')

const client = new bitcoind.Client(config.bitcoindClient)

function watchAddress(address, callback){
    console.log({address})
    client.cmd(
        'importaddress',
        address,
        'test',
        false,
        (err)=>{
            callback(err)
        }
    )
}

function getBalance(address, callback){
    console.log({address})
    client.cmd(
        'getreceivedbyaddress',
        address,
        (err, balance, resHeaders)=>{
            if (err) return callback(err);
            callback(null, balance)
        }
    )
}

function getAddressHistory(address, callback){
    client.listTransactions((err, tranactions)=>{
        if (err) return console.log({err})
        let matchedTxs = tranactions.filter( tx => {
            return tx.address == address
        })
        callback(null, matchedTxs)
    })
}

function createMultiSig( callback ){
    client.createMultiSig(1 , [
      'mtw1xAnqGYgzuoa1SKmqkSKbkCuccMbx8Z',
      'mhQANhN5izytVbBpSVSoQZz7Z9QZQNiE82'
    ], (err, result)=>{
        console.log({err, result})
    })
}

createMultiSig()

module.exports = {
    getBalance,
    watchAddress,
    getAddressHistory
}
