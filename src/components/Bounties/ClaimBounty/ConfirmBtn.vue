<template lang="jade">

button(@click='CLAIM_BOUNTY()') CLAIM BOUNTY

</template>

<script>

export default {
    methods: {
        CLAIM_BOUNTY(){
            this.$store.dispatch('CLAIM_BOUNTY')
            this.$store.commit('setIsUserClaiming', false)
        },
    },
}

</script>

<style lang="stylus" scoped>

button
    background:silver
    color:black
    width:100%

</style>
