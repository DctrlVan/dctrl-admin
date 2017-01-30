<template lang='jade'>

#members
    h1 Active Members: {{ finances.active.length }}
    h1 {{ finances.commonsFund }}
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

h1
    text-align:right

h3
    padding:10em

</style>
