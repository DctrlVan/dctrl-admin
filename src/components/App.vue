<template lang='jade'>

#dctrlapp
    .menu
        navigation
    .row.container
        .four.columns.u-hide-at-sm
            // spaceholder
            p &nbsp;
        .eight.columns
            router-view

</template>

<script>

import Navigation from './Navigation.vue'

export default {
    components: {
        Navigation,
    },
}


</script>

<style lang="stylus" scoped>

@import "../styles/framework"
@import "../styles/colours"

#dctrlapp
    background:main
    font-family:font

.menu
    position:fixed
    left: 100px
    width: 350px
    z-index:10000


</style>
