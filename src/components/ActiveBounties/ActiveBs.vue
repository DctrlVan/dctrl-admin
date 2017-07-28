<template lang='jade'>

tr
    td {{b.name}}
    td {{currentValue}}
    td {{b.value}}

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
        setInterval( ()=>{
            this.currentValue = calculatePayout(this.b['value'], this.b['last-claimed'], Date.now())
        },2222)
    },
    data() {
        return {
            currentValue: ''
        }
    },
}

</script>

<style lang="stylus">

</style>
