<template lang='jade'>

#members
    h1 Feb. Membership Status
    .row
      .six.columns
          shame-pie.pie
      .six.columns
          labels

</template>

<script>
import ShamePie from './ShamePie'
import Labels from './Labels'

export default {
    beforeMount(){
        this.$store.commit('setHeader', 'Financials:')
    },
    computed: {
        finances(){
            return this.$store.state.members
        },
    },
    components: { ShamePie , Labels }
}

</script>

<style lang='stylus'>

@import '../../styles/framework'
@import '../../styles/colours'

h1
    color: mainLight
    background: mainDark
    text-decoration:underline

.pie
    padding-left:10px


</style>
