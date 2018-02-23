<template lang='pug'>

#home
    shared-title(:title='name')
    p TODO - way to change password
    calendar

</template>

<script>

import Calendar from '../MemberCalendar'
import SharedTitle from '../slotUtils/SharedTitle'

export default {
    components:{
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
