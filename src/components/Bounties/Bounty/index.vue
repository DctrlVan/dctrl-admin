<template lang='jade'>
.bounty.row
    h5 {{ x.name }}: {{ x.amount }}bits
    .buttons
        claim-btn(:x='x._id')
        reserve-btn(:x='x._id')
        tag(v-for='x in tags', :x='x')
    p {{ x.description }}

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


.bounty
    border-style:solid
    border-radius:5%
    border-color:black
    border-width:3px
    padding:0
    margin: .3em

h5
    background:black
    color:white
    padding:0
    margin:0
    font-size:2em
    text-align:center

.reserve
    margin-right:5px

.buttons
    padding:0
    margin:0
    content-align: center
    background: black
    margin-bottom:0
    :first-child
        float:right

p
    padding: .8em .8em .8em .8em


</style>
