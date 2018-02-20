const fs = require('fs')
const grpc = require('grpc')
const uuidV1 = require('uuid/v1')
const dctrlDb = require('../dctrlDb')
const lnd = require('../lnd.js')
const meta = require('../lndConfig/meta')

module.exports = {
    invoiceCreated,
    invoicePaid
}

function invoiceCreated(ownerId, memo, value, callback) {
    lnd.addInvoice({ memo, value }, meta, (err, response) => {
        if (err) {
            callback(err);
        } else {
          let newEvent = {
              type: "invoice-created",
              ownerId,
              r_hash: response.r_hash,
              payment_request: response.payment_request,
              memo,
              value,
              settled: false,
          }
          dctrlDb.insertEvent(newEvent, callback)
        }
    })
}

function invoicePaid(r_hash, callback){
    lnd.lookupInvoice({ r_hash },function(err, response) {
        if (err) {
            callback(err);
        } else {
            console.log('LookupInvoice: ' + response);
            if (response.settled){
                let newEvent = {
                    type: "invoice-paid",
                    r_hash
                }
                dctrlDb.insertEvent(newEvent, callback)
            } else {
                console.log('invoice has not been paid')
                callback('not paid')
            }
        }
    })
}
