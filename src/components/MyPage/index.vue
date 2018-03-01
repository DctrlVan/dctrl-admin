<template lang='pug'>

#home
    shared-title(:title='name')
    //- address
    p TODO
    ol
      li way to change password
      li way to show address
      li way prove address
      li !! way to input addresses if you are on multisig !! -- way to verify?, sign? keybase?
      li
    calendar

</template>

<script>

import Calendar from '../MemberCalendar'
import SharedTitle from '../slotUtils/SharedTitle'
import Address from '../forms/MemberPaidBtc'

export default {
    components: {
        SharedTitle, Calendar, Address
    },
    computed: {
        name(){
            return this.$store.getters.name
        }
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

</style>
