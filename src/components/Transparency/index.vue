<template lang='jade'>

#transparency
    shared-title(title='Transparency')
        month-summary(v-for='m in members', :x='m')

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'
import MonthSummary from './MonthSummary'


const mockExpenseData = [

]

const mockMembersData = [
  {
    isActive: true,
    balance: "0",
    address: "abc"
  },{
      isActive: true,
      balance: "0",
      address: "asd"
  },{
      isActive: true,
      balance: "0",
      address: "assd"
  },{
      isActive: true,
      balance: "0",
      address: "asssd"
  },{
      isActive: true,
      balance: "0",
      address: "asdss"
  }
]


export default {
    // TODO: get array from backend
    data(){
      return {
        members: mockMembersData
      }
    },
    components: { SharedTitle , MonthSummary}
}

</script>

<style lang='stylus' scoped>

@import '../../styles/framework'
@import '../../styles/colours'

</style>
