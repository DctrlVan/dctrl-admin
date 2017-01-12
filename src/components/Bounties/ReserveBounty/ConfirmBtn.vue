<template lang="jade">

button(@click='RESERVE_BOUNTY()') RESERVE BOUNTY

</template>

<script>

export default {
    methods: {
        CLAIM_BOUNTY(){
            this.$store.commit('setIsUserReserving', false)
        },
    },
}

</script>

<style lang="stylus" scoped>

button
    background:#f7a400
    color:white
    width:100%

</style>
