<template lang='jade'>

#dctrlapp
    heading(:content='headingContent')
    .menu
        navigation
    .row.container
        .four.columns.u-hide-at-sm
            p &nbsp;
        .eight.columns.shiftup
            router-view

</template>

<script>

import Navigation from './generics/Navigation.vue'
import Heading from './generics/Heading.vue'

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
@import "../styles/main"

#dctrlapp
    background:#5eab98

.menu
    position:fixed
    padding-left:120px
    width: 350px
    z-index:10000
    padding-top:333px


@media (min-width: breakpoint) {
    .shiftup {
        margin-top: 0px
    }
}

</style>
