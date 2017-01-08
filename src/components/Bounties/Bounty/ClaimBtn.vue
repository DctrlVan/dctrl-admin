<template>

<button @click="openClaimingModal(x)">
    Claim Your Bounty!
</button>

</template>

<script>

export default {
    props:['x'],
    methods:{
        openClaimingModal(_id){
            this.$store.commit('setClaimId', _id)
            this.$store.commit('setIsUserClaiming', true)
        }
    }
}

</script>


<style lang='stylus' scoped >

button
    color:black
    float:right


</style>
