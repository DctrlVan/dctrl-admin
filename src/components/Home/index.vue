<template lang='jade'>

#projects
    shared-title(title='About Us')
        h3 The Space
        p DCTRL is a Collaborative Community inspired by the ideas behind Bitcoin, Decentralization, and the Open Source movement. This is a meetup where forward thinking people can hangout with like-minded individuals. We believe Cryptocurrency and the Open Source movement can create economically sustainable systems for communities globally and locally.
        p Check out our&nbsp;
            a(href='https://www.meetup.com/dctrlvan/') meetup page
            span . If you are interested in hosting an event please make a request to info@decentral.network
        p Have a question or concept you want to discuss, join our&nbsp;
            a(href='https://decentralslackvite.herokuapp.com/') Slack Chat.
        p You code? Then find us on&nbsp;
            a(href='https://github.com/DecentralVan/dctrlapp') github!

        h3 The App
        p The&nbsp;
             a(href='https://github.com/DecentralVan/dctrlapp') dctrlapp
             span  is community management software for helping communities self-govern themselves in a peer-to-peer way. All the code is open source including a web interface for interaction and information, a&nbsp;
                a(href='https://github.com/decentralvan/eventstate') backend
                span &nbsp;for managing members, and a rfid fob system that controls access to commons property.




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

a
    color: accent2


h3
    text-align: left
    color:teal

</style>
