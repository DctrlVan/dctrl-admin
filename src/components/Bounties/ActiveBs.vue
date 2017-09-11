<template lang='jade'>

tr
    td
        router-link(to='supp')
            img(src='../../assets/images/doge.png')
    td {{b.name}}
    td {{currentValue}}
        span(v-if='b.boost > 0').boost (+ {{b.boost}})
    td
        router-link(:to='editLocation')
            img.pencil(src='../../assets/images/control.svg')
    td
        router-link(:to='historyLocation')
            img(src='../../assets/images/calendar.svg')

</template>

<script>


function calculateMsThisMonth(){
    let today = new Date()
    let daysThisMonth = new Date(today.getYear(), today.getMonth(), 0).getDate()
    return daysThisMonth * 24 * 60 * 60 * 1000
}

function calculatePayout(bounty){
    let msThisMonth = calculateMsThisMonth()
    let msSince = Date.now() - bounty.lastClaimed
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
        setInterval( ()=>{
            this.currentValue = calculatePayout(this.b).toFixed(6)
        },1111)
    },
    data() {
        return {
            currentValue: '...calculating'
        }
    },
    computed: {
        historyLocation(){
            return '/HISTORY_BOUNTY/' + this.b.bountyId
        },
        boostLocation(){
            return '/BOOST_BOUNTY/' + this.b.bountyId
        },
        editLocation(){
            return '/EDIT_BOUNTY/' + this.b.bountyId
        }
    },
}

</script>

<style lang="stylus" scoped>

@import '../../styles/colours'

td
    color: accent3
    vertical-align: middle
    font-size: 1.4em
    text-align: center

.pencil
    height: 39px

img
    height: 55px

</style>
