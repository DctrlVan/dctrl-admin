<template lang='jade'>

#projects
    h1 projects
    p It would be good to document our current projects and brainstorm/plan future projects. App design needed.... 

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

#projects
    background:#dbd8d8
    margin-top:0
    padding-bottom:40em
</style>
