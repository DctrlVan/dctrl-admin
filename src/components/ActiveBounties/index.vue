<template lang='jade'>

#ActiveBounties
    shared-title(title='Active Bounties')
    p The following is a list of all active bounties in DCTRL at the moment. Tab their corresponding fob, and the amount will be added to your account.
    table.u-full-width
        thead
            tr
                th Bounty Name
                th Current Value
                th Monthly Value
                th Edit
        tbody
            active-bs(v-for="b in bounties", :b="b")

</template>

<script>
import ActiveBs from "./ActiveBs"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'

export default {
  computed: {
      bounties(){
          return this.$store.state.brain.bounties.sort((a,b) => {
              return b.currentValue - a.currentValue
          })
      }
  },
    components:{
        SharedTitle,
        ActiveBs
    },
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

p
    font-size:1.4em
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
