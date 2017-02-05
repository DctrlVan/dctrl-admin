<template lang='jade'>
.bounty.row
    div
        h5 - {{ x.name }}
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

@import '../../../styles/colours'

.bounty
    background-color:contentColour
    padding-bottom:5em
    border-color:mainDark
    border-width:3px
    padding:0
    margin-bottom:3.33em

.bits
    font-size:.9em
    float:right

h5
    background:black
    color:accent1
    padding:0
    padding-left:.5em
    margin:0
    font-size:2em

p
    padding: .1em 1.5em 0em 1.5em
    margin:1em
    width: 70%

</style>
