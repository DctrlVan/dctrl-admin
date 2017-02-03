<template lang='jade'>

#members
    h1 January Membership Summaasdasdry
    .row
      .pie.six.columns
          shame-pie
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

#members
    background:#dbd8d8
    margin-top:0
    padding-bottom:40em

h1
    text-decoration:underline
    text-align:center

.pie
    padding-left:10px

</style>
