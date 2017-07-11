<template lang='jade'>

#home
    shared-title(title='About')
    p
        span The code for this admin is hosted here:  &nbsp;
        a(href='https://github.com/DecentralVan/dctrlapp') dctrlapp
        span &nbsp; and the &nbsp;
        a(href='https://github.com/decentralvan/eventstate') eventstate
        span .
        p This is community management software for helping communities self-govern themselves in a peer-to-peer way. All the code is open source including a web interface for interaction and information for managing members, and a rfid fob system that controls access to commons property.

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
    font-size:1.3em
    color:white
    font-family: 'Open Sans', light, sans-serif;

a
    color: accent2

h3
    text-align: left
    color:accent1
    font-family: 'Open Sans', light, sans-serif;


</style>
