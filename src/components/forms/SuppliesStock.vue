c<template lang='pug'>

#stocksupplies
    shared-title(title='stock bitpepsi')
    form-box(btntxt="Loaded"  event='supplies_stocked' v-bind:data='info')
        label Cans Stocked:
        input(v-model='info.amount' type='text')
        label Reciept value
        input(v-model='info.paid' type='text')
        label notes
        input(v-model='info.notes' type='text')
        label Member Fob (Tap it!)
        input(v-model='info.fob' type='text')


</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

// TODO: supplies stocked affect member...
export default {
    data(){
      return {
          info: {
              fob: '',
              paid: '',
              amount:'',
              notes: '',
              supplyType: 'bitpepsi' //
          }
      }
    },
    components:{
        SharedTitle, FormBox
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

p
    font-size:1.3em
    color:white
    font-family: 'Open Sans', light, sans-serif;

a
    color: accent2

h3
    text-align: left
    color:accent1
    font-family: 'Open Sans', light, sans-serif;


</style>
