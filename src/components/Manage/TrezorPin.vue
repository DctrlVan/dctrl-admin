<template lang='pug'>

#pin(v-if='showPin')
	h1 Enter Scrambled Pin
	table
		tr
			td
				.pad(@click='addToPin(7)') *
			td
				.pad(@click='addToPin(8)') *
			td
				.pad(@click='addToPin(9)') *
		tr
			td
				.pad(@click='addToPin(4)') *
			td
				.pad(@click='addToPin(5)') *
			td
				.pad(@click='addToPin(6)') *
		tr
			td
				.pad(@click='addToPin(1)') *
			td
				.pad(@click='addToPin(2)') *
			td
				.pad(@click='addToPin(3)') *
		tr
			td.pinlength
				span(v-for='l in currentPin') *
			td(@click='submitPin')
				button send-pin
</template>

<script>
const trezor = require('trezor.js') // import doesn't work but this does...
import bitcoin from 'bitcoinjs-lib'
// needed master branch to decode multisig
const Transaction = require('../../assets/js/bitcoinjs-lib-master/transaction')

const hex = "01000000000101189b48a348d7b5cae3aaa144ab7511402be496be1643019143769a79c5ad1aea01000000171600146e16a297f9f1e0f02ce9ff7a199c14b43c138305ffffffff0280a4bf070000000017a914ca714fcade78407ce31cf389115d1f0f40e0192a876093886e2e00000017a914ba81b88ba924b8881ace0f6bee720b42d49c401c8702483045022100926a04b93ca4190dbfe387a430948e43e97ddcd0e1b751b00c082ec2b3478f7d022041e15e46637946ee792a20b4e9beee25ee41a312872e55dfc6917c68a73b332b012102991257475d628583621291aa7969acd7cb2ca42e8227de911e17c1ffe3d0d9a100000000"

const tx = new Transaction.fromBuffer(
  Buffer.from(hex, 'hex')
)

console.log({tx})


var list = new trezor.DeviceList({
  debug: false
});
var hardeningConstant = 0x80000000;

list.on('disconnect', function(device) {
  console.log('Disconnected a device:', device);
  console.log('Devices:', list.asArray());
});

// This gets called on general error of the devicelist (no transport, etc)
list.on('error', function(error) {
  console.error('List error:', error);
});

// On connecting unacquired device
list.on('connectUnacquired', function(device) {
  // askUserForceAcquire(function() {
  device.steal().then(function() {
    console.log("steal done. now wait for another connect");
  });
  // });
});


var pinCallback
export default {
  data() {
    return {
      showPin: false,
      currentPin: ''
    }
  },
  methods: {
    submitPin() {
      // XXX
      this.showPin = false
      if (pinCallback) {
        pinCallback(null, this.currentPin)
      }
    },
    addToPin(n) {
      this.currentPin += n
    }
  },
  mounted() {
    var vue = this
    console.log('mounted called')
    list.on('connect', function(device) {
      console.log('Connected a device:', device)
      console.log('Devices:', list.asArray());
      // What to do on user interactions:
      // device.on('button', buttonCallback);

      device.on('pin', (type, callback) => {

        vue.showPin = true
        // set global variable to this callback.
        // button method on pin pad to call with user input
        pinCallback = callback
      });

      // triggering session emits the pin event above
      device.waitForSessionAndRun(function(session) {
        return session.getHDNode([
          (49 | hardeningConstant) >>> 0,
          (0 | hardeningConstant) >>> 0,
          (0 | hardeningConstant) >>> 0,
          0,
          0
        ], 'testnet')
      })
      .then( hdNode => {
          console.log({hdNode})
          console.log( 'address?', hdNode.getAddress() ) //
          console.log( 'network?', hdNode.getNetwork() ) // testnet
          console.log( 'pubkey?', hdNode.getPublicKeyBuffer().toString('hex') )
          // 030df3fd96b1e396d50eb82a331691e1a0b643fa81e9e5f624fb9828f7c7dc74e4
          // used this pubkey to create multisig address using bitcoind:
          // Create a multisig that requires one signature, getting trezor to sign this is
          // the hello world for this approach working:
          // client.createMultiSig(1 , [
          //       'mtw1xAnqGYgzuoa1SKmqkSKbkCuccMbx8Z', // address from bitcoind wallet
          //       '030df3fd96b1e396d50eb82a331691e1a0b643fa81e9e5f624fb9828f7c7dc74e4' // ^pubkey
          //     ], (err, result)=>{
          //         console.log({err, result})
                    // result
          // })
          // result: {
          //   address: '2NBheE4teF1rC1MvoGQVQ4VJbJQMEBx1kCx',
          //   redeemScript: '51210252b7710c9644bb1a7cb9f85ce9a943665a2d62b59e6d4584bd577f2eb39e2d8021030df3fd96b1e396d50eb82a331691e1a0b643fa81e9e5f624fb9828f7c7dc74e452ae'
          // }

          // Funding transaction was sent to the created address:
          // 0114134cc07f6ed0a09976e92a85a2ffe93978575a8ae852427a1ebca4191a58
          // hex was parsed into bitcoinjs-lib tx at top of this file.
          // amount: 1.3 btc (testnet)

          // we need to reverse the buffer to make a bitcoinjs-lib hash
          let hash = bitcoin
              .bufferutils
              .reverse('0114134cc07f6ed0a09976e92a85a2ffe93978575a8ae852427a1ebca4191a58')

          // Now attempting to build the
          let info = {
              inputs: [{
                hash,
                index: 0,
                // segwit: true,
                amount: 1.30000000
              }],
              outputs: [{
                value: 1.29,
                address: "n1NjGcfjN1QwNTXf6JnqBMgK8Nhn2woAqy"
              }]
          }

          // the trezor requires whole input transactions referenced above
          let refTx = [
            tx
          ]

          // From trezor.js docs:
          // HDNodes for addresses, with indexes being the index of the nodes.
          // So, most often, [externalChainHDNode, changeChainHDNode].
          // Am I doing this wrong, used the HDNode from the input to the
          // multisig transaction. The output address is from bitcoind, doesn't
          // seem sensible to require an hdNode to send to. Usually send to address 
          let nodes = [
            hdNode
          ]

          device.waitForSessionAndRun(function(session) {
            return session.signBjsTx(info, refTx, nodes, 'testnet')
          })
          .then( signed => {
              console.log({signed})
          })
          .catch( err => {
            console.log('signBjsTx Error',
              {err} // "Failure_DataError"
            )
          })
      })
    })
  }
}
</script>

<style lang='stylus' scoped>

@import '../../styles/normalize'
@import '../../styles/colours'
@import '../../styles/breakpoints'

table
  background: accent1

.pinlength
  font-size: 2.222em
  color: main

#home
  width:100%

.pinPad
  color: accent3
  width: 100%

button
    color: white
    margin: 1em
    background: accent1
    width: 100%

.pad
  font-size: 2.222em
  min-width: 3em
  min-height: 3em
  text-align: center
  vertical-align: middle
  text-decoration: none;
  color: accent1
  margin-bottom: 0;
  border-style:solid
  border-width:3px
  border-radius: 1em
  border-color:main
  list-style: none;
  font-family:sans-serif
  margin-bottom:.54321em
  margin-right: 1em


.pad:hover, .router-link-active
  background-color: accent4
  border-radius:30px
  color:main

table, td, tr
  vertical-align: bottom
  border-style: none


</style>
