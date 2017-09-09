<template lang='jade'>

table
    tr
        th
        th Name
        //- th address
        th Location
        th FAQs
        th Top User
        th History
    slot

</template>


<script>

export default {
    props: ['r'],
    components: {  },
}

</script>

<style lang="stylus">

@import '../../styles/colours'

table
    color: accent1
    text-align:left
    width: 100%
th
    font-family: sans-serif
    font-weight: lighter
    font-size: 1.1em


td, tr, th
    border-color: accent4

</style>
