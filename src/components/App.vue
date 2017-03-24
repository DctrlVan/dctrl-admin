<template lang='jade'>

#dctrlapp
    img(src='../assets/images/tronStuff.svg')
    mobile-heading
    .menu
        main-menu
    .row.container
        .four.columns.u-hide-at-sm
            p &nbsp;
        .eight.columns
            transition(name='slide-fade')
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

<style lang="stylus" scoped>

@import "../styles/framework"
@import "../styles/colours"

#dctrlapp
    background:main
    font-family:font

img
    position:absolute
    left:0
    top:0
    overflow:visible

.menu
    position:fixed
    left: 100px
    width: 350px
    z-index:10000

.u-hide-at-sm
    height:1px

.slide-fade-enter-active
    transition: all 1.5s ease
    max-height:300px

.slide-fade-enter, .slide-fade-leave-to
    opacity: 0;
    max-height:0

</style>
