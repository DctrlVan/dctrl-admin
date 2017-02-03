<template lang='jade'>
.bounty.row
    div
        h5 {{ x.name }}
        p {{ x.description }}
        .bits {{ x.amount }} bits
            claim-btn(:x='x._id')
    tag(v-for='x in x.tags', :x='x')

</template>

<script> // ES6


import ClaimBtn from './ClaimBtn'
import Tag from './Tag'
import ReserveBtn from './ReserveBtn'

export default {
    props: ['x'],
    components: { Tag, ClaimBtn, ReserveBtn },
}

</script>
<style lang='stylus' scoped>

@import '../../../styles/main'

.bounty
    background-color:green
    padding-bottom:10em

.bits
    font-size:.9em
    float:right
.bounty
    border-radius:5%
    border-color:mainDark
    border-width:3px
    padding:0
    margin: .3em

h5
    background:mainDark
    color:white
    padding:0
    margin:0
    font-size:2em
    text-align:center

p
    padding: .8em .8em .8em .8em


</style>
