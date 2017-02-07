<template lang='jade'>

#legend
    h5 Legend
    p.e - EXPENSES
    p.m - MEMBERSHIPS

</template>

<script>

export default {

}

</script>

<style lang='stylus' scoped>

@import '../../styles/colours'

#legend
    border-style:solid
    border-color:mainLight

h5
    text-align:center

p
    text-align:left
    padding: .0em 1em
    margin:0
    font-size: 1.2em
    font-weight:bolder
    color:mainLight

</style>
