<template lang='jade'>

#members
    h1 Active Members: {{ finances.active.length }}
    h1 {{ finances.commonsFund }}
    li Monthly Member Contribution: {{ finances.membershipRevenue }}
    li Fixed Costs {{ finances.fixedCosts}}
    li Profit/Loss: {{finances.membershipRevenue - finances.fixedCosts}}
    li TODO: ^^^ graph / summarize & watch blockchain

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

#members
    background:#dbd8d8

h1
    text-align:right

</style>
