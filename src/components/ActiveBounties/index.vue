<template lang='jade'>

#ActiveBounties
    shared-title(title='Active Bounties')
    p Active bounties will be here
    table.u-full-width
        thead
            tr
                th Bounty Name
                th Current Value
        tbody
            active-bs(v-for="b in bounties", :b="b")

</template>

<script>
import ActiveBs from "./ActiveBs"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'

function calculatePayout(monthValue, lastClaimed, now){
    let msSince = now - lastClaimed
    let today = new Date()
    let daysThisMonth = new Date(today.getYear(), today.getMonth(), 0).getDate()
    let msThisMonth = daysThisMonth * 24 * 60 * 60 * 1000
    return (msSince / msThisMonth) * monthValue
}

export default {
  data(){
      return {
          bounties: []
      }
  },
  mounted(){
      request
          .get('/current_state')
          .end( (err, res)=> {
              console.log("response from /current_state::")
              console.log(res.body)
              let now = Date.now()
              let tempBounties = []
              res.body.bounties.forEach(bounty => {
                  let processedBounty = {
                      name: bounty.name,
                      currentValue: calculatePayout(bounty.value, bounty.notes, now)
                  }
                  tempBounties.push(processedBounty)
              })
              this.bounties = tempBounties.sort((a,b) => {
                  return b.currentValue - a.currentValue
              })
          })
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
    font-size:1.3em
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
