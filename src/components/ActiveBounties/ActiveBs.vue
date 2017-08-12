<template lang='jade'>

tr
    td {{b.name}}
    td {{currentValue}}
        span(v-if='b.boost > 0').boost (+ {{b.boost}})
    td {{b.value}}
    td
        button(@click='toHistory') History
    td
        button(@click='toEdit') edit
    td
        button(@click='toBoost') boost
</template>

<script>


function calculateMsThisMonth(){
    let today = new Date()
    let daysThisMonth = new Date(today.getYear(), today.getMonth(), 0).getDate()
    return daysThisMonth * 24 * 60 * 60 * 1000
}

function calculatePayout(bounty){
    let msThisMonth = calculateMsThisMonth()
    let msSince = Date.now() - bounty['last-claimed'] * 1000
    let payout = (msSince / msThisMonth) * parseFloat(bounty.value)
    let cap = parseFloat(bounty.cap)
    let boost = parseFloat(bounty.boost) || 0
    if (cap > 0){
        return Math.min(payout, cap) + boost
    }
    else {
        return payout + boost
    }
}

export default {
    props: ['b'],
    mounted(){
        this.currentValue = calculatePayout(this.b).toFixed(6)
        setInterval( ()=>{
            this.currentValue = calculatePayout(this.b['value'], this.b['last-claimed'], Date.now()).toFixed(6)
        },3333)
    },
    data() {
        return {
            currentValue: ''
        }
    },
    methods:{
      toHistory(){
            this.$router.push('HISTORY_BOUNTY/' + this.b['bounty-id'])
      },
      toEdit(){
            this.$router.push('EDIT_BOUNTY/' + this.b['bounty-id'])
        },
      toBoost(){
            this.$router.push('BOOST_BOUNTY/' + this.b['bounty-id'])
        }
    }
}

</script>

<style lang="stylus">

</style>
