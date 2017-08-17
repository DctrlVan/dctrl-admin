const request = require('superagent')
const Client = require('bitcore-wallet-client')
const BWS_INSTANCE_URL = 'https://bws.bitpay.com/bws/api' // # alternatives to bitpay?
const fs = require('fs')
const config = require('../conf')

const client = new Client({
 baseUrl: BWS_INSTANCE_URL,
 verbose: false,
})

client.importFromMnemonic(config.secret, {}, (err, wallet)=> {
    if (err){
        // TODO
        return console.log('error importing, cannot make addresses', {err})
    }
    console.log('import success', {wallet})
})

function getNewAddress(callback){

    client.createAddress({}, function(err,addr){
        if (err) {
          console.log('error: ', err);
          return;
        };
        console.log('got new address: ', addr.address)
        callback(null, addr.address)
    })
}

// function updateAddress(member, callback){
//     if (!getNewAddress){
//         return callback('wallet import not complete')
//     }
//     getNewAddress(addr => {
//         request
//             .post({
//                   type: 'member-update-address',
//                   "member-id": member['member-id'],
//                   "new-address": addr
//             })
//             .end(callback)
//     })
// }

module.exports = {
  getNewAddress,
  // updateAddress
}
