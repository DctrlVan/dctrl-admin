<template lang='pug'>

#ActiveBounties
    crazy-btn(to='/BOUNTY_CREATE' text='New Bounty')
    shared-title(title='Active Bounties')
    table.u-full-width
        thead
            tr
                th
                th Task
                th Reward
                th Instructions
                th
        tbody
            tr
                //- special bounty always there, link to supplies stocked
                td
                    router-link(to='/supplies_stock')
                        img(src='../../assets/images/claim.svg')
                td stock bitpepsi
                td 4
                td
                    li Load the bitpepsi two cans deep.
                    li The first row must be placed on the metal lip.
                    li If loaded before empty it is much easier; currently there are {{ bitpepsiStock }} left in the machine;
                    li When you claim record the number loaded and the value.
                    li Place the reciept in the admin locker.
                    li You can be redeemed in btc or membership credit.
                td
            active-bs(v-for="b in bounties", :b="b")
</template>

<script>
import ActiveBs from "./ActiveBs"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'
import CrazyBtn from '../slotUtils/CrazyBtn'

export default {
  computed: {
      bounties(){
          let bounties = this.$store.state.bounties
          return bounties
      },
      bitpepsiStock(){
          return this.$store.state.dctrl.supplies.bitpepsi
      }
  },
    components:{
        SharedTitle,
        ActiveBs,
        CrazyBtn
    },
}

</script>

<style lang="stylus" scoped>

@import '../../styles/colours'
@import '../../styles/crazybtn'

thead
    tr
        text-align: center

td
    vertical-align: middle
    color: accent2
    font-size: 1.34em
    text-align: center

li
    text-align: left


img
    height: 3.9em

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

</style>
