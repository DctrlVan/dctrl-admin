<template lang="pug">

#mobileheading
    a.hamburger(href="#", @click.prevent='toggleHeaderNav')
        img(src='../assets/images/hamburger.svg')
    nav.wrapper
        router-link(to="/")
            img(src='../assets/images/dctrl.svg')
        .toggle(v-if="showHeaderNav" @click="toggleHeaderNav")
            navigation().navigation--header
    slot

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
        console.log('toglin')
        this.showHeaderNav = !this.showHeaderNav
      },
    },
}
</script>

<style lang="stylus" scoped>
@import "../styles/framework"
@import "../styles/breakpoints"
@import "../styles/colours"
#mobileheading
    display:fixed
    width:100%
    background:main
    color: accent1
img
    height:90px
.hamburger
    position:absolute
    right:0

</style>
