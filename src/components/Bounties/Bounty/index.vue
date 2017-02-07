<template lang='jade'>
.bounty.row
    h6(@click="toggleOpen") {{ x.name }}
        .bits {{ x.amount }} bits
    div(v-show="open")
        p.content {{ x.description }}
        claim-btn(:x='x._id')

</template>

<script> // ES6


import ClaimBtn from './ClaimBtn'
import Tag from './Tag'
import ReserveBtn from './ReserveBtn'

export default {
    data(){
        return {
            open:false,
        }
    },
    methods:{
        toggleOpen(){
            this.open = !this.open
        }
    },
    props: ['x'],
    components: { Tag, ClaimBtn, ReserveBtn },
}

</script>



<style lang='stylus' scoped>

@import '../../../styles/colours'

.bounty
    color:accent1
    padding:0
    margin:0

.bits
    font-size:.9em
    float:right

p
    padding: 0

.content
    padding-right:2em
    padding-left:2em
    background: white
    color:black
    margin-left:2em
    margin-right:2em
    margin-top:1em

</style>
