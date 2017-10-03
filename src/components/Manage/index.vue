<template lang='pug'>

#home
    shared-title(title='Manage Cash')
    label Cash Expense
    cash-expense
    label Cash Received
    cash-received

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'
import CashExpense from '../forms/CashExpense'
import CashReceived from '../forms/CashReceived'

export default {
    components:{
        SharedTitle, CashExpense, CashReceived
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

#home
  width:100%

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

</style>
