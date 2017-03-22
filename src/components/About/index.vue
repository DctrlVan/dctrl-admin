<template lang='jade'>

#projects
    shared-title(title='About Us')
        p dctrlapp is community management software
        p dctrlvan is this...
        p dctrl is legion we do not forgive we do not forget

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'

export default {
    components:{
        SharedTitle
    }
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

p
    font-size:1em
    color:accent2

</style>
