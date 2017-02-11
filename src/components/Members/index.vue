<template lang='jade'>

#members
    h2 FEBRUARY 2017
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


h2
    text-transform:uppercase
    background:mainDark
    color:accent2
    margin:0
    padding-top:50px
    font-family:monospace
    font-weight:100
    border-bottom-style:solid
    border-color:accent2
    border-width:5px
    margin-bottom:1em

h3
    font-weight:100
    color: mainLight
    border-bottom-style:dashed
    border-width:2px
    margin-top:1.2em
    text-align:center

.ex
    float:right
    color: white
    background: #A20114
    font-size:1.6em
    border-style:dashed
    border-width:1px
    width:30%
    text-align:center

.mem
    color:white
    background:#5eab98
    text-align:center
    width:30%
    float:left
    font-size:1.6em
    border-style:dashed
    border-width:1px

.pie
    padding:10em
    padding-top:5em

</style>
