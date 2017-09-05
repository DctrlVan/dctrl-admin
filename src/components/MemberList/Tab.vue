<template lang='jade'>

table
    //- tr
    //-     th active
    //-     th who
    //-     //- th address
    //-     th balance
    //-     th history
    //-     th pay
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
    text-align:center
    width: 100%
th
    font-family: sans-serif
    font-weight: lighter
    font-size: 1.1em


td, tr, th
    border-color: accent4

</style>
