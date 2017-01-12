<template lang='jade'>

#dctrlapp
    heading(:content='headingContent')
    .menu
        navigation
    .row.container
        .four.columns.u-hide-at-sm
            p dctrl
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

.menu
    position:fixed
    padding-left:200px

@media (min-width: breakpoint) {
    .shiftup {
        margin-top: 0px
    }
}

</style>
