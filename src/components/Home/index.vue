<template lang='jade'>

#home
    h1 decentralized commons
    .row
        .four.columns
            p.l transparent
        .four.columns
            p.c collaborative
        .four.columns
            p.r enabling

</template>

<script>

export default {
}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

#home
    text-transform:uppercase
    padding-top:30px
    color:accent2

.r
    text-align: right

.l
    text-align: left

.c
    text-align: center
    
h1
    font-family:monospace
    font-size:5em
    color:accent1
    text-align:right

p
    padding: 0

</style>
