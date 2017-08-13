<template lang='jade'>

tr
    td {{b.name}}
    td {{currentValue}}
        span(v-if='b.boost > 0').boost (+ {{b.boost}})
    td {{b.value}}
    td
        router-link(:to='editLocation')
            img.pencil(src='../../assets/images/pencil.svg')
    td
        router-link(:to='historyLocation')
            img(src='../../assets/images/hamburger.svg')
    td
        router-link(:to='boostLocation')
            img(src='../../assets/images/boost.svg')
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
        setInterval( ()=>{
            this.currentValue = calculatePayout(this.b).toFixed(6)
        },1111)
    },
    data() {
        return {
            currentValue: ''
        }
    },
    computed: {
        historyLocation(){
            return '/HISTORY_BOUNTY/' + this.b['bounty-id']
        },
        boostLocation(){
            return '/BOOST_BOUNTY/' + this.b['bounty-id']
        },
        editLocation(){
            return '/EDIT_BOUNTY/' + this.b['bounty-id']
        }
    },
}

</script>

<style lang="stylus">

td
    vertical-align: middle
    color: accent2
    font-size: 1.4em
    text-align: center

.pencil
    height: 39px

</style>
