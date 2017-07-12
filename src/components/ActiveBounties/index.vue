<template lang='jade'>

#ActiveBounties
    shared-title(title='Active Bounties')
    p Active bounties will be here

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


</style>
