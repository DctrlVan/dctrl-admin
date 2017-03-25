<template lang='jade'>

main
  mobile-heading
  .side_bar
    main-menu
  .content
    router-view

</template>

<script>

import MainMenu from './MainMenu.vue'
import MobileHeading from './MobileHeading.vue'

export default {
    components: {
        MainMenu,
        MobileHeading
    },
}


</script>

<style lang="stylus">

@import "../styles/framework"
@import "../styles/colours"

*
  box-sizing: padding-box;

html, body
  overflow: hidden;

html, body, main
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;


main
  background:main
  font-family:font

.side_bar, .content {
  height: 100%;
  display: flex;
}

.side_bar {
  flex-basis: 40rem;
  flex-grow: 1;
}

.content {
  flex-grow: 4;
  overflow-y: scroll;
  padding: 0 2rem;
}


</style>
