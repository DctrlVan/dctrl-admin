<template lang='jade'>
.bounty.row
    h5 {{ x.name }}: {{ x.amount }}bits
    .buttons
        claim-btn(:x='x._id')
        reserve-btn(:x='x._id')
        tag(v-for='x in tags', :x='x')
    p {{ x.description }}
    hr

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

h5
    font-size:2em
    text-align:center
    margin-bottom:.2em

.reserve
    margin-right:5px

.buttons
    content-align: center
    background: black
    margin-bottom:0
    :first-child
        float:right

p
    padding: .8em .8em .8em .8em
    border-style:solid
    border-width: 1.8px

hr
    height: 30px
    border-style: solid
    border-color: black
    border-width: 1px 0 0 0
    border-radius: 20px
    padding-bottom:0
    margin-bottom:0

hr:before  /* Not really supposed to work, but does */
    display: block
    content: ""
    height: 30px
    margin-top: -31px
    border-style: solid
    border-color: black
    border-width: 0 0 1px 0
    border-radius: 20px

</style>
