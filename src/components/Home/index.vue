<template lang='jade'>

#home
    h1 dctrl community commons

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

</style>
