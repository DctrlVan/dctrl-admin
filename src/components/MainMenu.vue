<template lang='jade'>

nav
  router-link(to='/')
      img(src='../assets/images/dctrl.svg')
  navigation


</template>

<script>
import Navigation from './Navigation'

export default {
  components:{
      Navigation
  }
}
</script>

<style lang="stylus" scoped>

@import '../styles/colours'
@import '../styles/framework'
@import '../styles/breakpoints'

nav
  display: none;
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: #202020

// @media (max-width: breakpoint)
//   nav

img
    padding: 2rem
    height: 160px


</style>
