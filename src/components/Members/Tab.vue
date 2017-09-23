<template lang='pug'>

table
    tr
        th
        th hackername
        //- th address
        th balance
        th payment
        th history
    slot

</template>


<script>

export default {
    props: ['m'],
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
