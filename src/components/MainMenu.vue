<template lang='jade'>

.menu
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

.menu
    border-right-style:dashed
    border-color:accent1
    border-width:5px
    min-height:100%

@media (max-width: breakpoint)
    .menu
        display:none

img
    height: 133px

</style>
