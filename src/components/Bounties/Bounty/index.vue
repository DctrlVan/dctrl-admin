<template lang='jade'>
.bounty.row
    h6(v-if="!open" @click="toggleOpen") {{ x.name }}
        .bits {{ x.amount }} bits
    div(v-show="open" @click="toggleOpen")
        p.content {{ x.description }}
            claim-btn(:x='x')

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
    padding-right:4em
    padding-left:4em
    padding-top:1em
    background: contentColour
    color:main
    margin-top:1em

</style>
