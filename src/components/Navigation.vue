<template lang='jade'>

#dctrlapp
    heading(:content='headingContent')
    .row.container
        .four.columns.u-hide-at-sm
            navigation
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

@media (min-width: breakpoint) {
    .shiftup {
        margin-top: 0px
    }
}

</style>
