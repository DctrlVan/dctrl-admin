const fs = require('fs')
const lnd = require('./lnd.js')
const config = require('./lndConfig')
const meta = require('./lndConfig/meta')
const grpc = require('grpc')

lnd
    .getInfo({}, meta, function(err, response) {
        if (err) console.log(err);
        console.log('get Info', response);
    })

// lnd.listInvoices({}, meta, function(err, response) {
//     if (err) console.log(err)
//     console.log('get Info', response)
// })


const call = lnd.subscribeInvoices({}, meta)

call.on('data', function(message) {
    console.log(message)
})

call.on('end', function() {
    // The server has finished sending
    console.log("END");
});

call.on('status', function(status) {
    // Process status
    console.log("Current status: " + status);
});


lnd.addInvoice({
   memo: 'testing',
   value: 100
  //  receipt: <YOUR_PARAM>, TODO
  //  r_preimage: <YOUR_PARAM>,
  //  r_hash: <YOUR_PARAM>,
  //  value: <YOUR_PARAM>,
  //  settled: <YOUR_PARAM>,
  //  creation_date: <YOUR_PARAM>,
  //  settle_date: <YOUR_PARAM>,
  //  payment_request: <YOUR_PARAM>,
 },
 meta,
(err, response) => {
   if (err) console.log(err);
   console.log('add invoice', response)
 })
