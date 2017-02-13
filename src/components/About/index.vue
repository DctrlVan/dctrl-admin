<template lang='jade'>

#projects
    shared-title(title='About Us')
        p dctrlapp is community management software

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'

export default {
    components:{
        SharedTitle
    }
}

</script>

<style lang='stylus'>

p
    padding: 2em
    font-size:1.5em

</style>
