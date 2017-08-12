<template lang='jade'>

#ActiveBounties
    shared-title(title='Active Bounties')
        table.u-full-width
            thead
                tr
                    th Bounty Name
                    th Current Value ($)
                    th Monthly Value ($)
                    th History
                    th Edit
                    th Boost
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
          let bounties = this.$store.state.brain.bounties
          return bounties
      }
  },
    components:{
        SharedTitle,
        ActiveBs
    },
}

</script>

<style lang="stylus" scoped>

@import '../../styles/colours'

.or
    font-size: 1.3em

.pad
    margin-right: 5px

span
    color: accent1
    font-size: 1.4em
    text-align: center
    margin: 10px
    width:100%
    padding:1em


.small
    font-size: .5em


button
    background: accent1
    color: black
    border: none

img
    height: 55px

table
    text-align:center
    width: 100%
th
    font-family: sans-serif
    font-weight: lighter
    font-size: 1.1em
    color: accent1
    border-color: accent1
td
    color: accent3
tr
    color: accent2
    // TODO: style .inactive / or .active
</style>
