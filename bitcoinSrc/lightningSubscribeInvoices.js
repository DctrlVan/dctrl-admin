
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

var call = lightning.addInvoice({
    value: 100,
    memo: 'testin'
})


// lightning
//     .walletBalance({}, function(err, response) {
//         console.log('NewWitnessAddress: ' + response.balance);
//     })
//
//
