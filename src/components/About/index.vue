<template lang='jade'>

#projects
    shared-title(title='About Us')
        h2 The App
        p The DCTRLapp is community management software for helping communities self-govern themselves in a peer-to-peer/decentralized way. The software aims to automate backend processes with blockchain technology e.g. cryptocurrency and smart contracts.
        h2 The Space
        p DCTRL is a Collaborative Community inspired by the ideas behind Bitcoin, Decentralization, and the Open Source movement. This is a meetup where forward thinking people can hangout with like-minded individuals. We believe Cryptocurrency will fund the Open Source movement and create economically sustainable systems for communities globally and locally.
        This is a shared meetup, if you are interested in hosting an event please make a request to info@decentral.network
        you can join our Slack Chat here https://decentralslackvite.herokuapp.com/


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
