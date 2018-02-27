<template lang='pug'>

#home
    shared-title(:title='name')
    p TODO
    ol
      li way to change password
      li way to get new address
      li !! way to input addresses if you are on multisig !! -- way to verify?, sign? keybase?
      li 
    calendar

</template>

<script>

import Calendar from '../MemberCalendar'
import SharedTitle from '../slotUtils/SharedTitle'

export default {
    components: {
        SharedTitle, Calendar
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
