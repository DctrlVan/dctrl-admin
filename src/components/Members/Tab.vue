<template lang='pug'>

table
    slot

</template>


<script>

export default {
    props: ['m'],
    components: {  },
}

</script>

<style lang="stylus" scoped>

@import '../../styles/colours'

table
    color: accent1
    text-align:left
    width: 100%
th
    font-family: sans-serif
    font-weight: lighter
    font-size: 1.1em

</style>
