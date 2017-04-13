<template lang='jade'>
#ethos
    shared-title(title="Ethos")
        .blurb We believe that distributed networks are one of the most significant innovations in human history. They enable a radically different legal & economic system.
        .blurb We acknowledge the imperative for a sustainable future where community and the conditions for life are priority.
           span &nbsp;We are truly a niche community of likeminded individuals, friends, and peers. Our drive is to steer & embrace peer-to-peer technology.
           span &nbsp;We want to enable through education. We must empower, enable and improve ourselves and our society.
           span &nbsp;We are focused on …
        .row
            .four.columns
                p Decentralization
            .four.columns
                p Innovation
            .four.columbs
                p Bitcoin
        .row
            .four.columns
                p Community Culture
            .four.columns
                p Smart Iot
            .four.columbs
                p Commons

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

#ethos
    color:accent1
p
    font-family: 'Open Sans', light, sans-serif;
    font-size:25px
    text-align:center


.blurb
    font-size:1.1em
    color:white
    font-family: 'Open Sans', light, sans-serif;
    margin-bottom:1.5em

</style>
