<template lang='jade'>

#projects
    h1 About
    p dctrlapp is community management software

</template>

<script>

export default {
    beforeMount(){
        this.$store.commit('setHeader', 'Financials:')
    },
    computed: {
        finances(){
            return this.$store.state.members
        },
    }
}

</script>

<style lang='stylus'>

p
    padding: 2em
    font-size:1.5em

</style>
