<template lang='jade'>

#dctrlapp
    mobile-heading
    .menu
        main-menu
    .row.container
        .four.columns.u-hide-at-sm
            // spaceholder
            p &nbsp;
        .eight.columns
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
    font-family:monospace

.menu
    position:fixed
    left: 100px
    width: 350px
    z-index:10000


</style>
