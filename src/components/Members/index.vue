<template lang='jade'>

#members
    li Commons Fund Balance: {{ finances.commonsFund }}bits
    li Active Members: {{ finances.active.length }}
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

<style lang='stylus'></style>
