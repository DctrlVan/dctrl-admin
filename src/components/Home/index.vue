<template lang='jade'>

#home
    shared-title(title='dctrl community commons')
    p Welcome to community management software for a peer-to-peer commons.
    p All the code is open source including this web application & rethinkdb driven mutation/event database (dctrl-admin) and rfid fob reading for bounty claiming, beverage vending, and door opening (dctrl-fobtap).
    p We host &nbsp;
        a(href='https://www.meetup.com/dctrlvan/') meetups &nbsp;
        span that focus on decentralization: Decentralized Currency (Bitcoin), Decentralized Law (cooperatives, escrow contracts), Decentralized Production (3D printing, vertical farming, solar (nuclear?) energy), and Decentralized Communication (encryption, metaverse, tor).
    p Fork us on github <3: &nbsp;
        a(href='https://github.com/DecentralVan/dctrl-admin')
            button dctrl-admin
        a(href='https://github.com/decentralvan/dctrl-fobtap')
            button  dctrl-fobtap

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

button
    color: white
    margin: 1em
    background: accent1

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
    color: accent1

</style>
