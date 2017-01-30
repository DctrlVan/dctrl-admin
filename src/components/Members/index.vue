<template lang='jade'>

#members
    h1 Active Members: {{ finances.active.length }}
    h1 {{ finances.commonsFund }}
    h3 Fixed Costs {{ finances.fixedCosts}}
    h3 Profit/Loss: {{finances.membershipRevenue - finances.fixedCosts}}
    h3 TODO: ^^^ graph / summarize & watch blockchain
    h3 Monthly Member Contribution: {{ finances.membershipRevenue }}

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
    margin-top:0

h1
    text-align:right

h3
    padding:10em

</style>
