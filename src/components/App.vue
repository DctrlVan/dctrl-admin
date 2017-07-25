<template lang='jade'>

main
  .side_bar
      main-menu
  .content
      transition(name='fade')
          router-view

</template>

<script>

import MainMenu from './MainMenu.vue'

export default {
    components: {
        MainMenu,
    },
}


</script>

<style lang="stylus">


@import "../styles/breakpoints"
@import "../styles/framework"
@import "../styles/colours"

html, body, main, #app
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

.fade-enter-active
    transition: all 2s ease

.fade-enter, .fade-leave-to
    opacity: 0;


</style>
