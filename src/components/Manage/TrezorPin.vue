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
          console.log( 'address?', hdNode.getAddress() )
          console.log( 'network?', hdNode.getNetwork() )
          // able to use as key to createmultisig in bitcoindRpc
          console.log( 'pubkey?', hdNode.getPublicKeyBuffer().toString('hex') )

          // from hdNode
          // mg8VoRoa79w54azo7DUXL7nYwYeaY9wVKR
          // pubkey 0 : 030df3fd96b1e396d50eb82a331691e1a0b643fa81e9e5f624fb9828f7c7dc74e4

          // address 1 : mhQANhN5izytVbBpSVSoQZz7Z9QZQNiE82

      })
      // device.on('passphrase', passphraseCallback);
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
