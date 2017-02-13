<template lang="jade">

#mobileheading.container
    router-link(to="/")
        img(
            src='../assets/images/dctrl.svg'
        )
    a.hamburger(href="#", @click.prevent='toggleHeaderNav')
        img(src='../assets/images/hamburger.svg')
    navigation(v-if="showHeaderNav").navigation--header


</template>

<script>
import Navigation from './Navigation'

export default {
    components: { Navigation },
    props: ['content'],
    data(){
      return {
        showHeaderNav: false,
      }
    },
    methods:{
      toggleHeaderNav(){
        this.showHeaderNav = !this.showHeaderNav
      },
    },
}
</script>

<style lang="stylus" scoped>

@import "../styles/framework"
@import "../styles/breakpoints"

img
    height:100px

.hamburger
    position:absolute
    right:0

@media (min-width: breakpoint)
    #mobileheading
        display:none

</style>
