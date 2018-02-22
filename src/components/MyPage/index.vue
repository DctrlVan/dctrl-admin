<template lang='pug'>

#home
    shared-title(title='name here')
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
    methods: {

    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

</style>
