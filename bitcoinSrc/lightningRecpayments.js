
const lightning = require('./lightning')

var async = require('async');
var _ = require('lodash');
var ByteBuffer = require('bytebuffer');

var dest_pubkey = "0244e94c8e485036e5747a348815342c683dad964a51b259bec77dafb7192ec49d";
var dest_pubkey_bytes = ByteBuffer.fromHex(dest_pubkey);

// // // examples: test
// lightning
//     .getInfo({}, function(err, response) {
//         console.log({response});
//     })



call = lightning.addInvoice({
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
 }, function(err, response) {
  console.log({err,response})
 })




// lightning
//     .walletBalance({}, function(err, response) {
//         console.log('NewWitnessAddress: ' + response.balance);
//     })
//
//
