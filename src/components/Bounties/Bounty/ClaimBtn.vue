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

button {
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
}

</style>
