<template lang='jade'>

table
    tr
        th name
        th address
        th balance
        th history
        th active
        th pay with cash
    slot

</template>


<script>



export default {
    props: ['m'],
    components: {  },
}

</script>

<style lang="stylus">

table
    color: accent1
    text-align:center

// TODO: style .inactive / or .active

</style>
