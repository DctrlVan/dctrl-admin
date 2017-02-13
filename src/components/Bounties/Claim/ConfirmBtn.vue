<template lang="jade">

router-link(to='/BOUNTIES')
    button(@click='CLAIM_BOUNTY') CLAIM BOUNTY

</template>

<script>

export default {
    methods: {
        CLAIM_BOUNTY(){
            this.$store.dispatch('CLAIM_BOUNTY')
        },
    },
}

</script>

<style lang="stylus" scoped>

@import '../../../styles/colours'

button
    background:accent2
    width:100%
    color:main
    border-color: main

</style>
