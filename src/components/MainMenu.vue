<template lang='jade'>

.menu
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


@media (max-width: breakpoint)
    .menu
        display:none

img
    height: 200px

</style>
