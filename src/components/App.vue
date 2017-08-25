<template lang='jade'>

#app
    .mobile
        mobile-heading
            router-view
    main
      .side_bar
          main-menu
      .content
          router-view

</template>

<script>

import MainMenu from './MainMenu.vue'
import MobileHeading from './MobileHeading'
import io from 'socket.io-client'

const socket = io()
console.log(socket)

export default {
    mounted(){
        var vue = this
        var socket = io.connect();
        socket.on('eventstream', function(ev){
            vue.$store.commit('applyEvent', ev)
        });
        vue.$store.dispatch('loadCurrent')
    },
    components: {
        MainMenu, MobileHeading
    },
}


</script>

<style lang="stylus">

@import "../styles/breakpoints"
@import "../styles/framework"
@import "../styles/colours"

main
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  background:main
  color: accent1

main
  font-family:font

.side_bar, .content
  display: flex;

.content
   flex-grow: 4;
   overflow-y:scroll
   padding:0 5rem

.side_bar {
  flex-basis: 10rem;
  flex-shrink: 0;
  flex-grow: 0;
}

@media (max-width: breakpoint)
    main
        display: none

@media (min-width: breakpoint)
    .mobile
        display: none

</style>
