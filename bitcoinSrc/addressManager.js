const Client = require('bitcore-wallet-client')
const BWS_INSTANCE_URL = 'https://bws.bitpay.com/bws/api' // # alternatives to bitpay?
const fs = require('fs')
const config = require('../config')

const client = new Client({
 baseUrl: BWS_INSTANCE_URL,
 verbose: false,
})

var getNewAddress

client.importFromMnemonic(config.secret, {}, (err, wallet)=> {
    getNewAddress = function getNewAddress(callback){
        client.createAddress({}, function(err,addr){
            if (err) {
              console.log('error: ', err);
              return;
            };
            callback(null, addr.address)
        })
    }
})

function updateAddress(member, callback){
    if (!getNewAddress){
        return callback('wallet import not complete')
    }
    getNewAddress(addr => {
        request
            .post({
                  type: 'member-update-address',
                  address: member.address,
                  "new-address": addr
            })
            .end(callback)
    })
}

module.exports = {
  updateAddress
}
