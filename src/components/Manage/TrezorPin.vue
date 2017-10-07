<template lang='pug'>

#pin
  table(v-if='showPin')
    tr
      td(@click='addToPin(1)') x
      td(@click='addToPin(2)') x
      td(@click='addToPin(3)') x
    tr
      td(@click='addToPin(4)') x
      td(@click='addToPin(5)') x
      td(@click='addToPin(6)') x
    tr
      td(@click='addToPin(7)') x
      td(@click='addToPin(8)') x
      td(@click='addToPin(9)') x
    tr
      td {{currentPin}}
      td
      td
          button(@click='cb') send-pin

</template>

<script>

const trezor = require('trezor.js') // import doesn't work but this does...
import bitcoin from 'bitcoinjs-lib'

var list = new trezor.DeviceList({debug: false});
var hardeningConstant = 0x80000000;

list.on('disconnect', function (device) {
    console.log('Disconnected a device:', device);
    console.log('Devices:', list.asArray());
});

// This gets called on general error of the devicelist (no transport, etc)
list.on('error', function (error) {
    console.error('List error:', error);
});

// On connecting unacquired device
list.on('connectUnacquired', function (device) {
    // askUserForceAcquire(function() {
        device.steal().then(function() {
            console.log("steal done. now wait for another connect");
        });
    // });
});



export default {
    data(){
      return {
        showPin: false,
        currentPin: ''
      }
    },
    methods: {
      cb(callback){
          // XXX
      },
      addToPin(n){
          this.currentPin += n
      }
    },
    mounted(){
      var vue = this
      console.log('mounted called')
      list.on('connect', function (device) {
            console.log('Connected a device:', device)
            console.log('Devices:', list.asArray());
            vue.showPin = true
            // What to do on user interactions:
            // device.on('button', buttonCallback);

            device.on('pin', (type, callback)=> {
              console.log({type, callback})
              let button = document.getElementById("sendpin")
              console.log({button})
              // TODO: callback with user inputted pin.
              console.log('need to be able to call this callback in a vue method')
            });

            // triggering session emits the pin event above
            device.waitForSessionAndRun(function (session) {
                return session.getAddress([
                   (44 | hardeningConstant) >>> 0,
                   (0 | hardeningConstant) >>> 0,
                   (0 | hardeningConstant) >>> 0,
                   0,
                   0
                ], 'bitcoin', true)
            })
            // device.on('passphrase', passphraseCallback);
      })
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'
@import '../../styles/framework'
@import '../../styles/breakpoints'

#home
  width:100%

table
  font-size: 1.9em
  color: accent3
  width: 100%

button
    color: white
    margin: 1em
    background: accent1

p
    font-size:1.3em
    color:white
    font-family: 'Open Sans', light, sans-serif;

h3
    text-align: left
    color:accent1
    font-family: 'Open Sans', light, sans-serif;

a
    color: accent2
    text-decoration: none;

a:visited
    color: accent1

label
  font-size: 1.8em
  background: accent4
  color: white
  margin-top: 1.1234em
  padding: .4321em

img
  height: 45px

@media (max-width: breakpoint)
    .full
        display: none

@media (min-width: breakpoint)
    .mobile
        display: none

</style>
