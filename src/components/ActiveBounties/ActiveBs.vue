<template lang='jade'>

tr
    td {{b.name}}
    td {{currentValue}}
    td {{b.value}}
    td
        button(@click='toEdit') edit

</template>

<script>

function calculatePayout(monthValue, lastClaimed, now){
    let msSince = now - lastClaimed*1000
    let today = new Date()
    let daysThisMonth = new Date(today.getYear(), today.getMonth(), 0).getDate()
    let msThisMonth = daysThisMonth * 24 * 60 * 60 * 1000
    return (msSince / msThisMonth) * monthValue
}

export default {
    props: ['b'],
    mounted(){
        this.currentValue = calculatePayout(this.b['value'], this.b['last-claimed'], Date.now()).toFixed(6)
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
        toEdit(){
            this.$router.push('EDIT_BOUNTY/' + this.b['bounty-id']);
        }
    }
}

</script>

<style lang="stylus">

</style>
