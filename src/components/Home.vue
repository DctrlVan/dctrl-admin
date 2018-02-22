<template lang='pug'>

#home
    shared-title(title='dctrl community commons')
    auth
    p Welcome to dctrl, smart community application for the singularity.
    p 
    p ... TODO
    p We host &nbsp;
        a(href='https://www.meetup.com/dctrlvan/') meetups &nbsp;
        span that focus on decentralization: Decentralized Currency (Bitcoin), Decentralized Law (cooperatives, smart contracts), Decentralized Production (3D printing, vertical farming, solar energy), and Decentralized Communication (encryption, pgp, meshnet, tor).
    p Proudly open source: &nbsp;
        a(href='https://github.com/DecentralVan/dctrl-admin')
            button dctrl-admin
        a(href='https://github.com/decentralvan/dctrl-fobtap')
            button  dctrl-fobtap

</template>

<script>

import SharedTitle from './slotUtils/SharedTitle'
// import CrazyBtn from './slotUtils/CrazyBtn'
import Auth from './Auth'

export default {
    components:{
        SharedTitle, Auth
    }
}

</script>

<style lang='stylus' scoped>

@import '../styles/colours'

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
