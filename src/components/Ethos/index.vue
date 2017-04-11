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
                img(src='../../assets/images/decentralize.svg')
                p decentralization
            .four.columns
                img(src='../../assets/images/cultivate.svg')
                p innovation
            .four.columbs
                img(src='../../assets/images/bitcoin.svg')
                p bitcoin
        .row
            .four.columns
                img(src='../../assets/images/decentralize.svg')
                p community culture
            .four.columns
                img(src='../../assets/images/smarten.svg')
                p smart iot
            .four.columbs
                img(src='../../assets/images/decentralize.svg')
                p commons

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
    font-size:25px

.blurb
    font-size:1.2em
    color:white
    font-family: 'Open Sans', light, sans-serif;
    margin-bottom:1em

</style>
