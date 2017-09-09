
const lightning = require('./lightning')

var ByteBuffer = require('bytebuffer');

// Bob's node id:
var dest_pubkey = "0244e94c8e485036e5747a348815342c683dad964a51b259bec77dafb7192ec49d";
var dest_pubkey_bytes = ByteBuffer.fromHex(dest_pubkey);

const call = lightning.sendPayment()

call.on('data', function(payment) {
  console.log("Payment sent:");
  console.log(payment);
});
call.on('end', function() {
  // The server has finished
  console.log("END");
});

// You can send single payments like this
call.write({ dest: dest_pubkey_bytes, amt: 6969 });

// // // examples: test
// lightning
//     .getInfo({}, function(err, response) {
//         console.log({response});
//     })

//
// lightning
//     .walletBalance({}, function(err, response) {
//         console.log('NewWitnessAddress: ' + response.balance);
//     })
//
//
