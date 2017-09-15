<template lang='jade'>

table
    tr
        th Use
        th Where
        th
        th Details
        th Book Space
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
