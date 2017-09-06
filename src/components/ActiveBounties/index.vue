<template lang='jade'>

#ActiveBounties
    router-link(to='/BOUNTY_CREATE').crazybtn
        span New Bounty
    shared-title(title='Active Bounties')
    table.u-full-width
        thead
            tr
                th Claim
                th Bounty Name
                th Current Value ($)
                th
                th
        tbody
            tr
                td
                    router-link(to='/supplies_stock')
                        img(src='../../assets/images/doge.png')
                td stock bitpepsi
                td 4
                td
                td
            active-bs(v-for="b in bounties", :b="b")
</template>

<script>
import ActiveBs from "./ActiveBs"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'

export default {
  computed: {
      bounties(){
          let bounties = this.$store.state.bounties
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
@import '../../styles/crazybtn'

td
    vertical-align: middle
    color: accent2
    font-size: 1.4em
    text-align: center

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
