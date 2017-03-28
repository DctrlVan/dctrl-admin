<template lang='jade'>
#ethos
    shared-title(title="Ethos")
        .blurb We believe that distributed networks are one of the most significant innovations in human history. They enable a radically different legal & economic system.
        .blurb We acknowledge the imperative for a sustainable future and the need for humanized economics where community and the conditions for life are priority.
        .blurb We are truly a niche community of likeminded individuals, friends, and peers. Our drive is to steer peer-to-peer technology and enable through education.
        .blurb We must empower the individual, enable trade and improve society.
        .blurb Our community is focused on …
        .row
            .four.columns
                img(src='../../assets/images/decentralize.svg')
                p decentralize
            .four.columns
                img(src='../../assets/images/cultivate.svg')
                p cultivate
            .four.columbs
                img(src='../../assets/images/bitcoin.svg')
                p bitcoin
        .row
            .four.columns
                img(src='../../assets/images/decentralize.svg')
                p community
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
