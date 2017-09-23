<template lang="pug">

transition(name='fade')
    .feed(v-if='eventstream.showEvent')
        .six.columns
            img(src='../../assets/images/doge.png')
        .six.columns
            h5 {{ eventstream.type }}
            h4 {{ eventstream.meme }}

</template>

<script>

export default {
    computed:{
        eventstream(){
            return this.$store.state.eventstream
        }
    }
}
</script>

<style lang='stylus' scoped>
@import '../../styles/skeleton'
@import '../../styles/breakpoints'
@import '../../styles/colours'

h4
    margin-bottom: -10px
    padding:.3em
    background: accent1

h5
    background: black
    padding:.4em


label
    font-size: 1.3em

.feed
    position: absolute
    background: accent2
    color: white
    bottom: 25px
    right: 25px
    height:160px
    width: 500px

img
    height:170px

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0
}

</style>
