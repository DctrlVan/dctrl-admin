<template lang='jade'>

#members
    h3 Status - February
    .mem Memberships
    .ex Expenses
    shame-pie.pie

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

@import '../../styles/framework'
@import '../../styles/colours'

h3
    color: mainLight
    font-weight:bolder
    border-bottom-style:dashed
    border-width:2px

.ex
    float:right
    color: #A20114
    padding:1em
    font-size:1.6em
    border-bottom-style:dashed
    border-width:1px
    width:30%
    text-align:center

.mem
    text-align:center
    width:30%
    float:left
    color:#5eab98
    padding:1em
    font-size:1.6em
    border-bottom-style:dashed
    border-width:1px

.pie
    padding:10em

</style>
