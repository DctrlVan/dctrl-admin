<template lang="jade">

button(@click='CLAIM_BOUNTY()') CLAIM BOUNTY

</template>

<script>

export default {
    methods: {
        CLAIM_BOUNTY(){
            this.$store.dispatch('CLAIM_BOUNTY')
            this.$store.commit('setIsUserReserving', false)
        },
    },
}

</script>

<style lang="stylus" scoped>

@import '../../../styles/colours'

button
    background:accent3
    color:black
    width:100%

</style>
