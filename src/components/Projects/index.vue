<template lang='jade'>

#projects
    shared-title(title='Projects')
        h6 An attempt to automate management of the commons
        ul
            li Bitcoin Vending Machine
            li RFID Door
            li Kegorator - valve, flowmeter, keg & bitcoin
            li Project & task bounty system
        h6 we also like things that party & play
        ul
            li Play with our fully addressable LED sidewalk in: javascript, rust, clojure, c ...
            li decentralized dance party
            li recording booth
            li karaoke
            li ping pong (dueces) table
            li virtual reality experiences
            li sound shapes
        h6 Putting bitcoin to use?
        ul
            li commons fund multisig
            li dctrl server services (bitcoind,... coming: lightningd, tumblebit )
            li In collaboration with The Bitcoin Co-op, coinOS - a lightning enabled payment processor.
        h6




</template>

<script>
import SharedTitle from '../slotUtils/SharedTitle'

export default {
    components: {
        SharedTitle
    }
}

</script>

<style lang='stylus' scoped>
@import '../../styles/colours'

#projects
    color:accent1

li
  color:white
  font-size:18px

</style>
