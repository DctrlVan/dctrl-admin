<template lang='jade'>
#ethos
    shared-title(title="Ethos")
        .blurb We believe that distributed networks are one of the most significant innovations in human history. They enable a radically different legal & economic system.
        .blurb We acknowledge the imperative for a sustainable future where community and the conditions for life are priority.
        .blurb We are truly a niche community of likeminded individuals, friends, and peers. Our drive is to steer & embrace peer-to-peer technology.
        .blurb We want to enable through education. We must empower, enable and improve ourselves and our society.
        .blurb We are focused on …
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

.fa
    font-size:60px
    padding:1em
p
    font-size:25px

.blurb
    font-size:15px
    color:accent3
    padding: 0 10px
    margin-bottom:22px

</style>
