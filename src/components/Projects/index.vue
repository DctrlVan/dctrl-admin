<template lang='jade'>

#projects
    shared-title(title='Projects')
        h3 An attempt to automate management of the commons
        ul
            li Bitcoin Vending Machine
            li RFID Door
            li Kegorator - valve, flowmeter, keg & bitcoin
            li Project & task bounty system
        h3 we also like things that party & play
        ul
            li LED sidewalk in: javascript, rust, clojure, c ...
            li decentralized dance party
            li recording booth
            li karaoke
            li ping pong (dueces) table
            li virtual reality experiences
            li sound shapes




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
    font-family: 'Open Sans', light, sans-serif;

li
  color:white
  font-size:18px
  font-family: 'Open Sans', light, sans-serif;

h3
  font-family: 'Open Sans', light, sans-serif;
  font-size:1.6em

</style>
