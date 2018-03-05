<template lang='pug'>

#home
    shared-title(:title='name')
    .container
        payment
    changer
    label Your badges
    badges(:m='member')
    h6 dctrl members have access to cool shared resources, but also responsibility for their care, maintenance, and replenishment! Be excellent.
    calendar

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'
import Calendar from '../MemberCalendar'
import Payment from './Payment' // address is an html word so cannot use
import Changer from './Changer' // address is an html word so cannot use
import Badges from '../Members/Badges'


export default {
    components: {
        SharedTitle, Calendar, Payment, Changer, Badges
    },
    computed: {
        member(){
            return this.$store.getters.member
        },
        name(){
            return this.$store.getters.name + '(' + this.$store.getters.member.balance.toFixed() + ')'
        }
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

h6
    padding: 2em

select
    margin: 2em
    color: main
    height: 2em

</style>
