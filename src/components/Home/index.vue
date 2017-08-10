<template lang='jade'>

#home
    shared-title(title='dctrl community commons')
    p This is community management software for helping communities self-govern in a peer-to-peer way.
    p The space acts as a autonomous organization (an AO).
    p All the code is open source including this admin interface, an eventstate database and rfid readers for bounty claiming, beverage vending, and door opening.
        span hosted here:  the &nbsp;
        a(href='https://github.com/DecentralVan/dctrl-admin') dctrl-admin
        span , &nbsp;the &nbsp;
        a(href='https://github.com/decentralvan/dctrl-brain') dctrl-brain
        span , &nbsp;and the &nbsp;
        a(href='https://github.com/decentralvan/dctrl-fobtap') dctrl-fobtap
        span .
    p Todo: explain why

</template>

<script>

import SharedTitle from '../slotUtils/SharedTitle'

export default {
    components:{
        SharedTitle
    },
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

p
    font-size:1.3em
    color:white
    font-family: 'Open Sans', light, sans-serif;

h3
    text-align: left
    color:accent1
    font-family: 'Open Sans', light, sans-serif;

a
    color: accent2
    text-decoration: none;

a:visited
    color: accent

</style>
