<template lang='jade'>

#stocksupplies
    shared-title(title='Stock BitPepsi')
    form-box(btntxt="Loaded"  endpoint='/stock_supplies' v-bind:data='info')
        label New Cans Stocked:
        input(v-model='info.amount' type='text')
        label notes
        input(v-model='info.notes' type='text')

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'
import FormBox from '../slotUtils/FormBox'

export default {
    data(){
      return {
          info: {
              amount:'',
              notes: ''
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
