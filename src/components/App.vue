<template lang='jade'>

#dctrlapp
    heading(:content='headingContent')
    .menu
        navigation
    .row.container
        .four.columns.u-hide-at-sm
            // spaceholder
            p &nbsp;
        .eight.columns.shiftup
            router-view

</template>

<script>

import Navigation from './Navigation.vue'
import Heading from './Heading.vue'

export default {
    components: {
        Navigation,
        Heading,
    },
    computed:{
        headingContent(){
            return this.$store.state.director.headingContent
        }
    },
}


</script>

<style lang="stylus" scoped>
@import "../styles/framework"
@import "../styles/main"

#dctrlapp
    font-family:font
    background:#5eab98

.menu
    position:fixed
    padding-left:120px
    width: 350px
    z-index:10000
    padding-top:333px


</style>
