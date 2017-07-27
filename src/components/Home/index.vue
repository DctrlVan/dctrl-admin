<template lang='jade'>

#home
    shared-title(title='dctrl community commons')
    p
        span The code for this admin is hosted here:  &nbsp;
        a(href='https://github.com/DecentralVan/dctrlapp') dctrlapp
        span &nbsp; and the &nbsp;
        a(href='https://github.com/decentralvan/eventstate') eventstate
        span .
        p This is community management software for helping communities self-govern themselves in a peer-to-peer way. All the code is open source including a web interface for interaction and information for managing members, and a rfid fob system that controls access to commons property.

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'
// import qrcode from 'qrcode-generator'

export default {
    components:{
        SharedTitle
    },
    mounted(){
      // this does not belong here
    	// var typeNumber = 4;
      // var errorCorrectionLevel = 'L';
      // var qr = qrcode(typeNumber, errorCorrectionLevel);
      // qr.addData('Hi!');
      // qr.make();
      // document.getElementById('test').innerHTML = qr.createImgTag();
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

p
    font-size:1.3em
    color:white
    font-family: 'Open Sans', light, sans-serif;

h3
    text-align: left
    color:accent1
    font-family: 'Open Sans', light, sans-serif;

li a
    color: accent2
    text-decoration: none;

li a:visited
    color: accent2

</style>
