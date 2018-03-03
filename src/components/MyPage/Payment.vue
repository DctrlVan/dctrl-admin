<template lang='pug'>


.address
    .qr
        div(v-html='imgTag')
    h5 on chain address for {{ name }}: {{address}}
    img.l.big(src='../../assets/images/bitcoin.svg')
    h5 or lightning payment for
        input(type='text', v-model='details.cadvalue')
    router-link(:to='"/invoices/" + memberId')
        button(@click='createPayRec')
            img.r(src='../../assets/images/lightning.svg')
            img.r(src='../../assets/images/lightning.svg')
            img.l(src='../../assets/images/lightning.svg')
            img.l(src='../../assets/images/lightning.svg')
            span {{sats.toLocaleString()}} sats = ${{ details.cadvalue }}

</template>

<script>

import request from 'superagent'
import FormBox from '../slotUtils/FormBox'
import qrcode from 'qrcode-generator'

export default {
    data( ){
        let cadvalue
        if ( this.$store.getters.member.balance < 0){
            cadvalue = -this.$store.getters.member.balance
        }
        console.log({cadvalue})
        if (!cadvalue){
            cadvalue = 0
        } else {
            cadvalue = cadvalue.toFixed(2)
        }
        return {
          details: {
            cadvalue
          }
        }
    },
    computed: {
        sats(){
            let sats = parseFloat( this.details.cadvalue ) / this.$store.state.cash.spot * 100000000
            console.log({sats})
            return sats.toFixed(0)
        },
        imgTag(){
            console.log('computing imgTag?')
            let typeNumber = 4;
            let errorCorrectionLevel = 'L';
            let qr = qrcode(typeNumber, errorCorrectionLevel);
            let address = 'x'
            this.$store.state.members.forEach( member => {
                if (member.memberId === this.$store.getters.memberId){
                    address = member.address.slice()
                }
            })
            let data = 'bitcoin:' + address
            qr.addData(data)
            qr.make()
            let cellsize = 3
            let margin = 3
            return qr.createImgTag(cellsize, margin)
        },
        name(){
            let name = '...loading'
            this.$store.state.members.forEach( member => {
                if (member.memberId === this.$store.getters.memberId){
                    name = member.name.slice()
                }
            })
            return name
        },
        address(){
            return this.$store.getters.member.address
        },
        memberId(){
            return this.$store.getters.memberId
        }
    },
    methods: {
        createPayRec(){
          console.log('creating payment request? ')
          request
              .post('/events')
              .set('Authorization', this.$store.state.loader.token)
              .send({
                  type: 'invoice-created',
                  value: this.sats,
                  memo: 'Payment: ' + this.$store.getters.name ,
                  ownerId: this.$store.getters.memberId
              })
              .end((err,res)=>{
                  if (err) return console.log(err);
                  console.log('createPayRec:', res.body)
              })
        }
    },
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'
@import '../../styles/button'

.qr
    float: right
    padding:2em

h5
    padding: 2em

.big
    float: left
    z-index: -1111
    height: 10em
    margin-top: -1.5em
    margin-bottom: -1.5em

input
    float: right

button
  img
    height: 1.5em
    z-index: 100

.r
    float: right

.l
    float: left

.c
    text-align: center
    font-size: 3em

</style>
