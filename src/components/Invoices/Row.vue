<template lang='pug'>

.invoices.row
    .six.columns
        div
            div(v-html='imgTag')
        p.payreqtxt {{ i.payment_request }}
    .six.columns
        label memo: {{i.memo}}
        label value: {{i.value}}

</template>

<script>

import qrcode from 'qrcode-generator'

export default {
    props: ['i'],
    computed: {
        imgTag(){
          let typeNumber = 10;
          let errorCorrectionLevel = 'L';
          let qr = qrcode(typeNumber, errorCorrectionLevel);
          let data = this.i.payment_request
          try {
              qr.addData(data)
              qr.make()
          } catch(err) {
             return console.log('err from qrcode', err)
          }
          let cellsize = 6
          let margin = 6
          let tag = qr.createImgTag(cellsize, margin)
          return tag
        },
    }
}

</script>

<style lang="stylus" scoped>

@import '../../styles/button'
@import '../../styles/grid'
@import '../../styles/colours'



.invoices
    width: 100%

h3
    text-align:center

.payreqtxt
    word-wrap: break-word

.refill
    color: main
    background: green
    border-color: green

</style>
