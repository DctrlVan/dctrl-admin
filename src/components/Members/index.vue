<template lang='jade'>

#members
    h1 dctrl January Summary:
    shame-pie

</template>

<script>
import ShamePie from './ShamePie'

export default {
    beforeMount(){
        this.$store.commit('setHeader', 'Financials:')
    },
    computed: {
        finances(){
            return this.$store.state.members
        },
    },
    components: { ShamePie }
}

</script>

<style lang='stylus'>

#members
    background:#dbd8d8
    margin-top:0
    padding-bottom:40em
</style>
