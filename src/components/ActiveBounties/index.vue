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
        tbody
            active-bs(v-for="b in bounties", :b="b")

</template>

<script>
import ActiveBs from "./ActiveBs"
import request from "superagent"
import SharedTitle from '../slotUtils/SharedTitle'

function calculatePayout(monthValue, lastClaimed, now){
    let msSince = now - lastClaimed*1000
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
                      currentValue: calculatePayout(bounty.value, bounty['last-claimed'], now),
                      monthValue: bounty.value,
                      lastClaimed: bounty['last-claimed']
                  }
                  tempBounties.push(processedBounty)
              })
              this.bounties = tempBounties.sort((a,b) => {
                  return b.currentValue - a.currentValue
              })
          })
      setInterval(()=>{
          let now = Date.now()
          let tempBounties = []

          this.bounties.forEach(bounty => {
              bounty.currentValue = calculatePayout(bounty.monthValue, bounty.lastClaimed, now)
              tempBounties.push(bounty)
          })
          this.bounties = tempBounties.sort((a,b) => {
              return b.currentValue - a.currentValue
          })
      }, 500)
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
